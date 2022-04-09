import "@material/mwc-checkbox/mwc-checkbox.js";
import "@material/mwc-formfield/mwc-formfield.js";
import "@material/mwc-textfield/mwc-textfield.js";
import { html, LitElement } from "lit";

class HumanLanguage extends LitElement {
  static get properties() {
    return {
      langField: { type: String },
      prefField: { type: String },
      url: { type: String },
      value: { type: Array },
    };
  }

  constructor() {
    super();
    this.langField = "true";
    this.prefField = "true";
    this.value = [{}];
  }

  render() {
    if (typeof this.value == "string") {
      this.value = JSON.parse(this.value);
    }

    return html` ${this.value.map(
      (i, index) => html`
        <div id="div">
          <mwc-formfield label="Communication:" alignEnd>
            ${this.langField !== "false"
              ? html`<mwc-textfield
                  outlined
                  class="langField"
                  value="${i.language || ""}"
                  label="Language"
                  @input="${(e) =>
                    (this.value[index].language = e.target.value)}"
                ></mwc-textfield>`
              : ""}
            ${this.prefField !== "false"
              ? html`<mwc-formfield alignEnd
                  >Language is preferred:<mwc-checkbox
                    class="prefField"
                    @input="${(e) =>
                      (this.value[index].preferred = e.target.value)}"
                  ></mwc-checkbox
                ></mwc-formfield>`
              : ""}
          </mwc-formfield>
        </div>
        <iron-ajax
          id="ajax"
          bubbles
          auto
          handle-as="json"
          .url="${this.url}"
        ></iron-ajax>
      `
    )}`;
  }
}

window.customElements.define("human-language", HumanLanguage);
