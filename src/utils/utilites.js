export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}
export const formSettings = {
  header: "Tasks style",
  lists: [
    { text: "Default(Square)", class: "" },
    { text: "Rounded", class: "rounded" },
    { text: "Pyramid", class: "pyramid" },
  ],
};
export const colorSettings = {
  header: "Theme",
  lists: [
    { text: "Gold", class: "gold" },
    { text: "Blue", class: "blue" },
    { text: "Purple", class: "purple" },
    { text: "Yellow-Green", class: "yellow-green" },
  ],
};
export const fontSettings = {
  header: "Font",
  lists: [
    { text: "Raleway (en)", class: "raleway" },
    { text: "Shadows Into Light (en)", class: "shadow-into-light" },
    { text: "Bangers (en)", class: "bangers" },
    { text: "Montserrat (en/ru)", class: "montserrat" },
    { text: "Oswald (en/ru)", class: "oswald" },
    { text: "Ubuntu (en/ru)", class: "ubuntu" },
  ],
};
