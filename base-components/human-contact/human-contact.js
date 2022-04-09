import "@material/mwc-formfield";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-select";
import "@material/mwc-textfield/mwc-textfield.js";
import { html, LitElement } from "lit";
import "../period/period.js";

class HumanContact extends LitElement {
  static get properties() {
    return {
      useField: { type: String },
      systemField: { type: String },
      contNumb: { type: String },
      rankVal: { type: String },
      periodField: { type: String },
      url: { type: String },
      value: { type: String },
    };
  }

  constructor() {
    super();
    this.useField = "true";
    this.systemField = "true";
    this.contNumb = "true";
    this.rankVal = "true";
    this.periodField = "false";
    this.value = [{}];
  }

  render() {
    if (typeof this.value == "string") {
      this.value = JSON.parse(this.value);
    }
    return html`${this.value.map(
      (i, index) => html`
        <div id="humanNameDiv">
          <mwc-formfield label="Telecom details" alignEnd>
            ${this.systemField !== "false"
              ? html` <mwc-select
                  label="System"
                  class="systemField"
                  outlined
                  .value="${i.system}"
                  @change="${(e) =>
                    (this.value[index].system = e.target.value)}"
                >
                  <mwc-list-item value="phone">Phone</mwc-list-item>
                  <mwc-list-item value="fax">Fax</mwc-list-item>
                  <mwc-list-item value="email">Email</mwc-list-item>
                  <mwc-list-item value="Pager">Pager</mwc-list-item>
                  <mwc-list-item value="url">URL</mwc-list-item>
                  <mwc-list-item value="sms">SMS</mwc-list-item>
                  <mwc-list-item value="other">Other</mwc-list-item>
                </mwc-select>`
              : ""}
            ${this.useField !== "false"
              ? html`
                  <mwc-select
                    label="Use"
                    class="useField"
                    outlined
                    .value="${i.use}"
                    @change="${(e) => (this.value[index].use = e.target.value)}"
                  >
                    <mwc-list-item value="home">Home</mwc-list-item>
                    <mwc-list-item value="work">Work</mwc-list-item>
                    <mwc-list-item value="temp">Temp</mwc-list-item>
                    <mwc-list-item value="home">Old</mwc-list-item>
                    <mwc-list-item value="mobile">Mobile</mwc-list-item>
                  </mwc-select>
                `
              : ""}
            ${this.contNumb !== "false"
              ? html`<mwc-textfield
                  outlined
                  class="contNumb"
                  value="${i.value || ""}"
                  @input="${(e) => (this.value[index].value = e.target.value)}"
                  label="Contact"
                ></mwc-textfield>`
              : ""}
            ${this.rankVal !== "false"
              ? html`<mwc-textfield
                  outlined
                  class="rankVal"
                  value="${i.rank || ""}"
                  @input="${(e) => (this.value[index].rank = e.target.value)}"
                  label="Rank:"
                ></mwc-textfield>`
              : ""}
            ${this.periodField !== "false"
              ? html`<fhir-period class="periodField"></fhir-period>`
              : ""}
          </mwc-formfield>
        </div>
      `
    )}`;
  }
}

window.customElements.define("human-contact", HumanContact);
