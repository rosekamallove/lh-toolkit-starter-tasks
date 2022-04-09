import { LitElement, html } from "lit-element";
import "@material/mwc-textfield/mwc-textfield.js";
import "@material/mwc-select";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-formfield";
import "../period/period.js";

class HumanAddress extends LitElement {
  static get properties() {
    return {
      useSelect: { type: String },
      typeSelect: { type: String },
      add1Field: { type: String },
      add2Field: { type: String },
      cityField: { type: String },
      districtField: { type: String },
      periodField: { type: String },
      url: { type: String },
      value: { type: Array },
    };
  }

  constructor() {
    super();
    this.useSelect = "true";
    this.typeSelect = "true";
    this.add1Field = "true";
    this.add2Field = "true";
    this.cityField = "true";
    this.districtField = "true";
    this.periodField = "false";
    this.value = [{}];
  }

  render() {
    if (typeof this.value == "string") {
      this.value = JSON.parse(this.value);
    }
    return html`${this.value.map(
      (i, index) => html`
        <div id="addressDiv">
          <mwc-formfield label="Address:" alignEnd>
            ${this.useSelect !== "false"
              ? html` <mwc-select
                  label="Use"
                  class="useSelect"
                  outlined
                  .value="${i.use}"
                  @change="${(e) => (this.value[index].use = e.target.value)}"
                >
                  <mwc-list-item value="home">Home</mwc-list-item>
                  <mwc-list-item value="work">Work</mwc-list-item>
                  <mwc-list-item value="temp">Temporary</mwc-list-item>
                  <mwc-list-item value="old">Old</mwc-list-item>
                </mwc-select>`
              : ""}
            ${this.typeSelect !== "false"
              ? html` <mwc-select
                  label="Type"
                  class="typeSelect"
                  outlined
                  .value="${i.type}"
                  @change="${(e) => (this.value[index].type = e.target.value)}"
                >
                  <mwc-list-item value="postal">Postal</mwc-list-item>
                  <mwc-list-item value="physical">Physical</mwc-list-item>
                  <mwc-list-item value="both">Both</mwc-list-item>
                </mwc-select>`
              : ""}
            ${this.add1Field !== "false"
              ? html`<mwc-textfield
                  outlined
                  class="add1Field"
                  .value="${i.text || ""}"
                  label="Address 1"
                  @input="${(e) => (this.value[index].text = e.target.value)}"
                ></mwc-textfield>`
              : ""}
            ${this.add2Field !== "false"
              ? html`<mwc-textfield
                  outlined
                  class="add2Field"
                  .value="${i.line || ""}"
                  label="Address 2"
                  @input="${(e) => (this.value[index].line = e.target.value)}"
                ></mwc-textfield>`
              : ""}
            ${this.cityField !== "false"
              ? html`<mwc-textfield
                  outlined
                  class="cityField"
                  .value="${i.city || ""}"
                  label="City"
                  @input="${(e) => (this.value[index].city = e.target.value)}"
                ></mwc-textfield>`
              : ""}
            ${this.districtField !== "false"
              ? html`<mwc-textfield
                  outlined
                  class="districtField"
                  .value="${i.district || ""}"
                  label="District"
                  @input="${(e) =>
                    (this.value[index].district = e.target.value)}"
                ></mwc-textfield>`
              : ""}
            ${this.periodField !== "false"
              ? html`<fhir-period
                  class="periodField"
                  .value="${i.period}"
                  @input="${(e) => (this.value[index].period = e.target.value)}"
                ></fhir-period>`
              : ""}
          </mwc-formfield>
        </div>
      `
    )}`;
  }
}

window.customElements.define("human-address", HumanAddress);
