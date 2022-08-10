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
var TurndownService = require("turndown");
var turndownService = new TurndownService();
const getVideoUrl = (url) => {
    return url.split("/").pop();
};
const slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .trim();
};
const main = (title, url) => __awaiter(void 0, void 0, void 0, function* () {
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
});
main("Highlight: Screen cap the knowledge work you're already doing", "https://www.twitch.tv/videos/1557607195");
