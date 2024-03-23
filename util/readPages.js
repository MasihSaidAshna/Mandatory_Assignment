import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/index.html");
export const homePageRender = renderPage(homepage);

const about = readPage("./public/pages/about/about.html");
export const aboutRender = renderPage(about);

const contact = readPage("./public/pages/contact/contact.html");
export const contactRender = renderPage(contact);

const nodejs = readPage("./public/pages/documentation/nodejs.html");
export const nodejsRender = renderPage(nodejs);

const express = readPage("./public/pages/documentation/express.html");
export const expressRender = renderPage(express);

const deploy = readPage("./public/pages/documentation/deployment.html");
export const deploymentRender = renderPage(deploy);

const expimp = readPage("./public/pages/documentation/expimp.html");
export const expimpRender = renderPage(expimp);

const ssrcsr = readPage("./public/pages/documentation/ssr-csr.html");
export const ssrcsrRender = renderPage(ssrcsr);
