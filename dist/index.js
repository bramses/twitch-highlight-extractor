"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_html_parser_1 = require("node-html-parser");
var TurndownService = require("turndown");
var turndownService = new TurndownService();
// const html = `<div class="Layout-sc-nxg1ff-0" style="max-width: 640px;"><div class="Layout-sc-nxg1ff-0 gZaqky"><div class="Layout-sc-nxg1ff-0 hiuuyA"><hr class="timestamp-metadata__bar" style="border-left-color: rgb(247, 23, 23);"><p class="CoreText-sc-cpl358-0 hzkHyc">10 hours ago</p></div></div><h2 data-a-target="stream-title" title="Highlight: The Cringiest Part of Writing is Writing " class="CoreText-sc-cpl358-0 hqa-DkR">Highlight: The Cringiest Part of Writing is Writing </h2><div class="Layout-sc-nxg1ff-0 hiuuyA"><div><div class="Layout-sc-nxg1ff-0 llqalI"><a data-a-target="video-info-game-boxart-link" class="ScCoreLink-sc-udwpw5-0 ktfxqP tw-link" href="/directory/game/Software%20and%20Game%20Development"><p class="CoreText-sc-cpl358-0 gHOtHN">Software and Game Development</p></a><span><div class="Layout-sc-nxg1ff-0 cFMTBx"><p aria-hidden="true" class="CoreText-sc-cpl358-0 kZloQb">·</p></div></span><p class="CoreText-sc-cpl358-0 eQFsBw">0 views</p></div></div></div></div>`;
// const root = parse(html);
// let title = root
//   .querySelector(`h2[data-a-target='stream-title']`)
//   ?.getAttribute("title");
// if (!title) {
//   throw new Error("title not found");
// }
// const getVideoUrl = (url: string) => {
//   // https://www.twitch.tv/videos/1557607195 => 1557607195
//   return url.split("/").pop();
// };
// title = title.replace(/Highlight\:/g, "").trim();
// const videoId = getVideoUrl("https://www.twitch.tv/videos/1557607195");
// const slugify = (text: string) => {
//   return text
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/[\s_-]+/g, "-")
//     .replace(/^-+|-+$/g, "")
//     .trim();
// };
// const descHtml = `<span class="CoreText-sc-cpl358-0 CJRYs" style="position: relative;"><div class="resize-detector"><div class="resize-detector"><div class="resize-detector__grow" style="width: 100000px; height: 100000px;"></div></div><div class="resize-detector"><div class="resize-detector__shrink"></div></div></div><div class="panel-description"><p>A very deep dive into multiple forms of edutainment delivery on the internet</p><p>We talk about:</p><ul><li><p>passive vs active consumption</p></li><li><p>ads and monetiztion</p></li><li><p>airpods???</p></li><li><p>phones connected to the internet in the middle of <strong>nowhere</strong></p></li><li><p>competition from TikTok</p></li><li><p>customizability with code blocks, animations, etc.</p></li><li><p>personality</p></li><li><p>the big dogs of distribution networks, and where the meager creator sits</p></li></ul></div></span>`;
// const descRoot = parse(descHtml);
// let desc;
// try {
//   const descQuery = descRoot.querySelector(`div[class="panel-descriptionz"]`);
//   desc = turndownService.turndown(descQuery?.innerHTML);
// } catch (err) {
//   desc = "";
// }
const main = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(url);
    const html = yield res.text();
    const root = (0, node_html_parser_1.parse)(html);
    const htmlRes = root.childNodes.filter((node) => node.nodeType === 1)[0];
    //console.log(root.querySelector('html')?.querySelector('body')?.querySelector('div[id="root"]')?.getElementsByTagName('div'));
    const betterRoot = root.getElementById('root').structure;
    console.log(betterRoot);
    //   const title = root
    //     .querySelectorAll(`h2[data-a-target='stream-title']`)[0]
    //     ?.getAttribute("title");
    //   if (!title) {
    //     throw new Error("title not found");
    //   }
    //   const videoId = getVideoUrl(url);
    //   let desc;
    //   try {
    //     const descQuery = descRoot.querySelector(`div[class="panel-description"]`);
    //     desc = turndownService.turndown(descQuery?.innerHTML);
    //   } catch (err) {
    //     desc = "";
    //   }
    //   let finalHTML = `---
    // title: '${title}'
    // excerpt: "Highlight clipped from stream"
    // ogImageUrl: 'https://imagedelivery.net/FVn4Kw8Yr8auy8XS7UL4RA/23df1849-f98d-479b-6fa4-8721f93e7700/public'
    // slug: '${slugify(title)}'
    // published: false
    // state: 'twitch'
    // ---
    // <CenterChild><iframe src="https://player.twitch.tv/?video=${videoId}&parent=www.bramadams.dev&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe></CenterChild>
    // ${desc}
    // [Follow me on Twitch!](https://www.twitch.tv/bramses)
    // `;
    //   console.log(finalHTML);
});
main("https://www.twitch.tv/videos/1557607195");
