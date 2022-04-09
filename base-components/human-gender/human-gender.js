import { LitElement, html } from "lit";
import "@material/mwc-formfield/mwc-formfield.js";
import "@material/mwc-radio/mwc-radio.js";

class HumanGender extends LitElement {
  static get properties() {
    return {
      genderVal: { type: String },
      url: { type: String },
      value: { type: String },
    };
  }

  constructor() {
    super();
    this.genderVal = "true";
    this.value = "";
  }

  render() {
    return html`
      <div id="genderVal">
        ${this.genderVal !== "false"
          ? html` <mwc-formfield label="Gender:" id="genderField" alignEnd>
              <mwc-radio
                value="male"
                ?checked="${this.value == "male" ? true : false}"
                @click="${(e) => (this.value = e.target.value)}"
              ></mwc-radio>
              Male
              <mwc-radio
                value="female"
                ?checked="${this.value == "female" ? true : false}"
                @click="${(e) => (this.value = e.target.value)}"
              ></mwc-radio>
              Female
              <mwc-radio
                value="other"
                ?checked="${this.value == "other" ? true : false}"
                @click="${(e) => (this.value = e.target.value)}"
              ></mwc-radio>
              Other
              <mwc-radio
                value="unknown"
                ?checked="${this.value == "unknown" ? true : false}"
                @click="${(e) => (this.value = e.target.value)}"
              ></mwc-radio>
              Unknown
            </mwc-formfield>`
          : ""}
      </div>
    `;
  }
}

window.customElements.define("human-gender", HumanGender);
