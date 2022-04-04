import { html, LitElement } from "lit";
import "@material/mwc-formfield";
import "@material/mwc-textfield";

class BirthDate extends LitElement {
  static get properties() {
    return {
      birthDate: { type: String },
      url: { type: String },
      value: { type: String },
    };
  }

  constructor() {
    super();
    this.birthDate = "true";
    this.value = "";
  }

  render() {
    return html`
      <div id="allergyDiv">
        ${this.birthDate !== "false"
          ? html`<mwc-formfield
              class="birthDate"
              alignEnd
              label="Date Of Birth:"
            >
              <mwc-textfield
                id="date"
                outlined
                type="date"
                value="${this.value}"
                @input="${(e) => (this.value = e.target.value)}"
              ></mwc-textfield>
            </mwc-formfield>`
          : ""}
      </div>
    `;
  }
}

window.customElements.define("birth-date", BirthDate);
