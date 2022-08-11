const url = process.argv[2].split(" ")[0];
const title = process.argv[2].split(" ").slice(1).join(" ");

if (!title || !url) {
  console.log("Usage: node index.ts <url> <title>");
  process.exit(1);
}

const getVideoUrl = (url: string) => {
  return url.split("/").pop();
};

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
};

const main = async (title: string, url: string) => {
  const videoId = getVideoUrl(url);
  const cleanTitle = (title = title.replace(/Highlight\:/g, "").trim());

  const finalHTML = `---
title: "${cleanTitle}"
excerpt: "Highlight clipped from stream"
ogImageUrl: 'https://imagedelivery.net/FVn4Kw8Yr8auy8XS7UL4RA/23df1849-f98d-479b-6fa4-8721f93e7700/public'
slug: '${slugify(cleanTitle)}'
published: false
state: 'twitch'
---

<CenterChild><iframe src="https://player.twitch.tv/?video=${videoId}&parent=www.bramadams.dev&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe></CenterChild>

[Follow me on Twitch!](https://www.twitch.tv/bramses)
`;

  console.log(finalHTML);
};

main(title, url);
