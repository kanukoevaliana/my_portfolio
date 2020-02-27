import "./styles/main.pcss";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/parallax";
import "./scripts/comments";
import "./scripts/scroll";
import "./scripts/form";
import "./scripts/menu";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}