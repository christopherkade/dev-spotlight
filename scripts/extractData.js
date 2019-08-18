const Prismic = require("prismic-javascript");
const fs = require("fs");
const { RichText } = require("prismic-dom");
const axios = require("axios");

const htmlSerializer = (type, element, content, children) => {
  let html;

  switch (type) {
    case RichText.Elements.paragraph:
      html = `<p>${children.join("")}</p>`;
      break;
    case RichText.Elements.list:
      html = `<ul>${children.join("")}</ul>`;
      break;
    case RichText.Elements.heading2:
      html = `<h2>${children.join("")}</h2>`;
      break;
    case RichText.Elements.heading3:
      html = `<h3>${children.join("")}</h3>`;
      break;
    case RichText.Elements.heading4:
      html = `<h4>${children.join("")}</h3>`;
      break;
    default:
      html = null;
      break;
  }

  return html;
}

const toHtml = data => RichText.asHtml(data, null, htmlSerializer);

/**
 * Script run once a week to extract data of the spotlight from Prismic
 * The data is then stored in a data/spotlightData.json file for us to use
 */
(() => {
  console.info("Extracting Dev Spotlight data for this week...")

  Prismic.getApi("https://dev-spotlight.cdn.prismic.io/api/v2").then((api) => {
    return api.query(Prismic.Predicates.at('document.type', 'spotlight'));
  }).then(({ results }) => {
    const { data } = results[0];

    const spotlight = {
      firstName: data.firstname[0].text,
      lastName: data.lastname[0].text,
      jobTitle: data.jobtitle[0].text,
      age: data.age[0].text,
      from: data.from[0].text,
      currentlyIn: data.currentlyin[0].text,
      gender: data.gender[0].text,
      description: toHtml(data.description),
      nextUp: toHtml(data.nextup),
      avatar: data.avatar.url,
      company: data.company[0].text,
      twitterUrl: data.twitterurl.url,
      githubUrl: data.githuburl.url,
      devUrl: data.devurl.url,
      portfolioUrl: data.portfoliourl.url,
      linkedinUrl: data.linkedinurl.url,
      projects: data.projects.map(project => {
        return {
          title: project.project_title[0].text,
          description: project.project_description[0].text,
          link: project.project_link.url
        }
      }),
      articles: data.articles.map(article => {
        return {
          title: article.article_title[0].text,
          link: article.article_link.url
        }
      })
    }

    fs.writeFileSync("src/data/spotlightData.json", JSON.stringify(spotlight), (err) => {
      console.error("❌ Error writing spotlight data", err);
    })

    console.log("✅ JSON data successfuly written");
  })
})()
