import { html, LitElement } from "lit";
import "../../base-components/active-status/active-status.js";
import "../../base-components/birth-date/birth-date.js";
import "../../base-components/decease-status/decease-status.js";
import "../../base-components/human-address/human-address.js";
import "../../base-components/human-contact/human-contact.js";
import "../../base-components/human-gender/human-gender.js";
import "../../base-components/human-language/human-language.js";
import "../../base-components/human-name/human-name.js";
import "../../base-components/human-relation/human-relation.js";
import "../../base-components/marital-status/marital-status.js";

class GetPatient extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      patientId: { type: String },
      patientName: { type: String },
      patientActive: { type: String },
      patientDeceased: { type: String },
      patientBirthday: { type: String },
      patientGender: { type: String },
      patientMarriage: { type: String },
      patientContact: { type: String },
      patientAddress: { type: String },
      patientLanguage: { type: String },
      relationType: { type: String },
      value: { type: Object },
    };
  }

  constructor() {
    super();
    this.relationType = "true";
    this.patientId = "true";
    this.patientName = "true";
    this.patientActive = "true";
    this.patientDecease = "true";
    this.patientBirthday = "true";
    this.patientGender = "true";
    this.patientMarriage = "true";
    this.patientContact = "true";
    this.patientAddress = "true";
    this.patientLanguage = "true";
    this.value = {};
  }

  updated() {
    this.shadowRoot
      .getElementById("ajax")
      .addEventListener("iron-ajax-response", function (e) {
        this.parentNode.host.value = e.detail.response;
      });
  }

  render() {
    if (typeof this.value == "string") {
      this.value = JSON.parse(this.value);
    }
    return html`
      <!-- ${this.patientId !== "false"
        ? html`<person-identifier
            .value="${this.value.identifier}"
            id="patientId"
          ></person-identifier>`
        : ""} -->
      ${this.patientName !== "false"
        ? html`<human-name
            .value="${this.value.name}"
            id="patientName"
          ></human-name>`
        : ""}
      ${this.patientActive !== "false"
        ? html`<active-status
            .value="${this.value.active}"
            id="patientActive"
          ></active-status>`
        : ""}
      ${this.patientDecease !== "false"
        ? html`<decease-status
            .value="${this.value.deceasedBoolean}"
            id="patientDecease"
          ></decease-status>`
        : ""}
      ${this.patientBirthday !== "false"
        ? html`<birth-date
            .value="${this.value.birthDate}"
            id="patientBirthday"
          ></birth-date>`
        : ""}
      ${this.patientGender !== "false"
        ? html`<human-gender
            .value="${this.value.gender}"
            id="patientGender"
          ></human-gender>`
        : ""}
      ${this.patientMarriage !== "false"
        ? html`<marital-status
            .value="${this.value.maritalStatus}"
            id="patientMarriage"
          ></marital-status>`
        : ""}
      ${this.patientContact !== "false"
        ? html`<human-contact
            .value="${this.value.telecom}"
            id="patientContact"
          ></human-contact>`
        : ""}
      ${this.patientAddress !== "false"
        ? html`<human-address
            .value="${this.value.address}"
            id="patientAddress"
          ></human-address>`
        : ""}
      ${this.patientLanguage !== "false"
        ? html`<human-language
            .value="${this.value.language}"
            id="patientLanguage"
          ></human-language>`
        : ""}
      ${this.relationType !== "false"
        ? html`<human-relation
            .value="${this.value.contact}"
            id="patientRelation"
          ></human-relation>`
        : ""}
      <iron-ajax
        id="ajax"
        bubbles
        auto
        handle-as="json"
        .url="${this.url}"
      ></iron-ajax>
    `;
  }
}

window.customElements.define("get-patient", GetPatient);
