import "@material/mwc-formfield/mwc-formfield.js";
import "@material/mwc-radio/mwc-radio.js";
import { html, LitElement } from "lit";

const jsonStringConverter = {
  toAttribute(val) {
    return JSON.Stringify(val);
  },
  fromAttribute(str) {
    return JSON.parse(str);
  },
};

class MaritalStatus extends LitElement {
  static get properties() {
    return {
      tableResponsive: { type: String },
      url: { type: String },
      value: { type: jsonStringConverter, reflect: true },
    };
  }

  render() {
    return html`
      ${this.tableResponsive !== "false"
        ? html` <mwc-formfield label="Marital Status:" alignEnd>
            <table class="tableResponsive">
              <form>
                <tr>
                  <td>
                    <mwc-formfield label="Annulled"
                      ><mwc-radio
                        id="annulled"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="A"
                        checked="${this.value == "A" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Divorced"
                      ><mwc-radio
                        id="divorced"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="D"
                        checked="${this.value == "D" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Interlocutory"
                      ><mwc-radio
                        id="interlocutory"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="I"
                        checked="${this.value == "I" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Legally Separated"
                      ><mwc-radio
                        id="legallyseparated"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="L"
                        checked="${this.value == "L" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Widowed"
                      ><mwc-radio
                        id="widowed"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="W"
                        checked="${this.value == "W" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Unmarried"
                      ><mwc-radio
                        id="unmarried"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="U"
                        checked="${this.value == "U" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                </tr>
                <tr>
                  <td>
                    <mwc-formfield label="Married"
                      ><mwc-radio
                        id="married"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="M"
                        checked="${this.value == "M" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Polygamous"
                      ><mwc-radio
                        id="polygamous"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="P"
                        checked="${this.value == "P" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Never Married"
                      ><mwc-radio
                        id="nevermarried"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="S"
                        checked="${this.value == "S" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Domestic partner"
                      ><mwc-radio
                        id="domesticpartner"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="T"
                        checked="${this.value == "T" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                  <td>
                    <mwc-formfield label="Unknown"
                      ><mwc-radio
                        id="unknown"
                        @click="${(e) => (this.value = e.target.value)}"
                        value="UNK"
                        checked="${this.value == "UNK" ? true : false}"
                      ></mwc-radio
                    ></mwc-formfield>
                  </td>
                </tr>
              </form>
            </table>
          </mwc-formfield>`
        : ""}
    `;
  }
}

window.customElements.define("marital-status", MaritalStatus);
