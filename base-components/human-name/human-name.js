import { LitElement, html } from "lit";
import "@material/mwc-textfield/mwc-textfield.js";
import "@material/mwc-formfield";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-select";
import "@polymer/iron-ajax/iron-ajax.js";

class HumanName extends LitElement {
  static get properties() {
    return {
      prefixField: { type: String },
      fname: { type: String },
      mname: { type: String },
      lname: { type: String },
      suffixField: { type: String },
      useField: { type: String },
      value: { type: Array },
    };
  }

  constructor() {
    super();
    this.prefixField = "true";
    this.fname = "true";
    this.mname = "false";
    this.lname = "true";
    this.suffixField = "true";
    this.useField = "true";
    this.value = [{ given: [] }];
  }

  render() {
    return html`${this.value.map(
      (i, index) => html` <div id="humanNameDiv">
        <mwc-formfield label="Name: " alignEnd>
          ${this.useField !== "false"
            ? html`
                <mwc-select
                  label="Use"
                  outlined
                  class="useField"
                  .value="${i.use}"
                  @change="${(e) => (this.value[index].use = e.target.value)}"
                >
                  <mwc-list-item value="usual">Usual</mwc-list-item>
                  <mwc-list-item value="official">Official</mwc-list-item>
                  <mwc-list-item value="temp">Temporary</mwc-list-item>
                  <mwc-list-item value="nickname">Nickname</mwc-list-item>
                  <mwc-list-item value="anonymous">Anonymous</mwc-list-item>
                  <mwc-list-item value="old">Old</mwc-list-item>
                  <mwc-list-item value="maiden">Maiden</mwc-list-item>
                </mwc-select>
              `
            : ""}
        </mwc-formfield>
        ${this.prefixField !== "false"
          ? html`<mwc-textfield
              outlined
              class="prefixField"
              .value="${i.prefix || ""}"
              @input="${(e) => (this.value[index].prefix = e.target.value)}"
              id="prefix"
              label="Prefix"
            ></mwc-textfield>`
          : ""}
        ${this.fName !== "false"
          ? html`<mwc-textfield
              outlined
              class="fName"
              .value="${this.mName !== "false" ? i.given[0] : i.given || ""}"
              @input="${(e) =>
                this.mName !== "false"
                  ? (this.value[index].given[0] = e.target.value)
                  : (this.value[index].given = e.target.value)}"
              label="First Name:"
            ></mwc-textfield>`
          : ""}
        ${this.mName !== "false"
          ? html`<mwc-textfield
              outlined
              class="mName"
              .value="${i.given[1]}"
              @input="${(e) => (this.value[index].given[1] = e.target.value)}"
              label="Middle Name:"
            ></mwc-textfield>`
          : ""}
        ${this.lName !== "false"
          ? html`<mwc-textfield
              outlined
              class="lName"
              .value="${i.family || ""}"
              @input="${(e) => (this.value[index].family = e.target.value)}"
              label="Last Name:"
            ></mwc-textfield>`
          : ""}
        ${this.suffixField !== "false"
          ? html`<mwc-textfield
              outlined
              class="suffixField"
              value="${i.suffix || ""}"
              @input="${(e) => (this.value[index].suffix = e.target.value)}"
              label="Suffix"
            ></mwc-textfield>`
          : ""}
      </div>`
    )}`;
  }
}

window.customElements.define("human-name", HumanName);
