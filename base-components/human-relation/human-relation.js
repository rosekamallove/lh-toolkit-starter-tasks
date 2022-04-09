import "@material/mwc-formfield";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-select";
import { html, LitElement } from "lit";
import "../human-address/human-address.js";
import "../human-contact/human-contact.js";
import "../human-gender/human-gender.js";
import "../human-name/human-name.js";

class HumanRelation extends LitElement {
  static get properties() {
    return {
      relationType: { type: String },
      nameField: { type: String },
      genderField: { type: String },
      addressField: { type: String },
      contactField: { type: String },
      url: { type: String },
      value: { type: Object },
    };
  }

  constructor() {
    super();
    this.relationType = "true";
    this.nameField = "true";
    this.genderField = "true";
    this.addressField = "true";
    this.contactField = "true";

    this.value = [
      {
        relationship: [{ coding: [{}] }],
        name: { given: [] },
        telecom: [{}],
        address: { line: [] },
      },
    ];
  }

  render() {
    if (typeof this.value == "string") {
      this.value = JSON.parse(this.value);
    }
    return html`${this.value.map(
      (i, index) => html`
        <div id="relationDiv">
          <mwc-formfield label="Contact Person Details:"></mwc-formfield
          ><br /><br />
          ${this.relationType !== "false"
            ? html`${i.relationship.map(
                (i2, index2) => html`
                  <mwc-select
                    label="Relation"
                    outlined
                    class="relationType"
                    value="${i2.coding[0].code}"
                    @change="${(e) =>
                      (this.value[index].relationship[index2].coding[0].code =
                        e.target.value)}"
                  >
                    <mwc-list-item value="BP"
                      >Billing Contact Person</mwc-list-item
                    >
                    <mwc-list-item value="C">Emergency Contact</mwc-list-item>
                    <mwc-list-item value="CP">Contact Person</mwc-list-item>
                    <mwc-list-item value="E">Employer</mwc-list-item>
                    <mwc-list-item value="EP"
                      >Emergency Contact Person</mwc-list-item
                    >
                    <mwc-list-item value="F">Federal Agency</mwc-list-item>
                    <mwc-list-item value="I">Insurance Company</mwc-list-item>
                    <mwc-list-item value="N">Next-Of-Kin</mwc-list-item>
                    <mwc-list-item value="O">Other</mwc-list-item>
                    <mwc-list-item value="PR"
                      >Person Preparing Referral</mwc-list-item
                    >
                    <mwc-list-item value="S">State Agency</mwc-list-item>
                    <mwc-list-item value="U">Unknown</mwc-list-item>
                  </mwc-select>
                `
              )}`
            : ""}
          ${this.nameField !== "false"
            ? html`<human-name
                useField="false"
                .value="${[i.name]}"
                @input="${(e) => (this.value[index].name = e.target.value)}"
              ></human-name>`
            : ""}
          ${this.genderField !== "false"
            ? html`<human-gender
                .value="${i.gender}"
                @input="${(e) => (this.value[index].gender = e.target.value)}"
              ></human-gender>`
            : ""}
          ${this.addressField !== "false"
            ? html`<human-address
                .value="${[i.address]}"
                @input="${(e) => (this.value[index].address = e.target.value)}"
              ></human-address>`
            : ""}
          ${this.contactField !== "false"
            ? html`<human-contact
                .value="${i.telecom}"
                @input="${(e) => (this.value[index].telecom = e.target.value)}"
              ></human-contact>`
            : ""}
        </div>
      `
    )}`;
  }
}

window.customElements.define("human-relation", HumanRelation);
