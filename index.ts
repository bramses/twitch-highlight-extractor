const url = process.argv[2];
const title = process.argv.slice(3).join(" ");

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
  title = title = title.replace(/Highlight\:/g, "").trim();

  let finalHTML = `---
title: '${title}'
excerpt: "Highlight clipped from stream"
ogImageUrl: 'https://imagedelivery.net/FVn4Kw8Yr8auy8XS7UL4RA/23df1849-f98d-479b-6fa4-8721f93e7700/public'
slug: '${slugify(title)}'
published: false
state: 'twitch'
---

<CenterChild><iframe src="https://player.twitch.tv/?video=${videoId}&parent=www.bramadams.dev&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe></CenterChild>

[Follow me on Twitch!](https://www.twitch.tv/bramses)
`;

  console.log(finalHTML);
};

main(
  "Highlight: Screen cap the knowledge work you're already doing",
  "https://www.twitch.tv/videos/1557607195"
);
