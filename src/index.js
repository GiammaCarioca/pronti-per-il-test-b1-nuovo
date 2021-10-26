import allSolutions from "../data.js";
import service from "./scripts/service.js";

const path = window.location.pathname;

function getDirectoryPathFromURL(path) {
  if (!path) return;

  const pathArray = path.split("/");
  const directoryPath = pathArray[pathArray.length - 2];

  return directoryPath;
}

function getFilePathFromURL(path) {
  if (!path) return;

  const pathArray = path.split("/");
  const filePath = pathArray[pathArray.length - 1].substring(0, 4);

  return filePath;
}

const solutions =
  allSolutions[getDirectoryPathFromURL(path)][getFilePathFromURL(path)];

const form = getFilePathFromURL(path);
const esercizio = document.getElementById(form);

export { solutions, esercizio, service };
