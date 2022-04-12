import "@material/mwc-button";
import "@polymer/iron-ajax/iron-ajax.js";
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

class CreatePatient extends LitElement {
  static get properties() {
    return {
      url: { type: String },
    };
  }

  render() {
    return html`
      <human-name id="patientName"></human-name>
      <active-status id="patientActive"></active-status>
      <decease-status id="patientDecease"></decease-status>
      <birth-date id="patientBirthday"></birth-date>
      <human-gender id="patientGender"></human-gender>
      <marital-status id="patientMarriage"></marital-status>
      <human-contact id="patientContact"></human-contact>
      <human-address id="patientAddress"></human-address>
      <human-language id="patientLanguage"></human-language>
      <human-relation id="patientRelation"></human-relation>
      <mwc-button id="button" raised @click=${() => this.doPost()}
        >Submit
      </mwc-button>
      <iron-ajax
        button
        bubbles
        method="POST"
        id="ajax"
        .url="${this.url}"
        on-response="handleResponse"
      ></iron-ajax>
    `;
  }

  doPost() {
    const pname = this.shadowRoot.getElementById("patientName").value;
    const pstatus = this.shadowRoot.getElementById("patientActive").value;
    const pdecease = this.shadowRoot.getElementById("patientDecease").value;
    const pbirth = this.shadowRoot.getElementById("patientBirthday").value;
    const pgender = this.shadowRoot.getElementById("patientGender").value;
    const pmarriage = this.shadowRoot.getElementById("patientMarriage").value;
    const pcontact = this.shadowRoot.getElementById("patientContact").value;
    const paddress = this.shadowRoot.getElementById("patientAddress").value;
    const planguage = this.shadowRoot.getElementById("patientLanguage").value;
    const prelation = this.shadowRoot.getElementById("patientRelation").value;
    this.shadowRoot.getElementById("ajax").contentType = "application/json";
    this.shadowRoot.getElementById("ajax").body = {
      resourceType: "Patient",
      name: pname,
      active: pstatus,
      deceased: pdecease,
      birthDate: pbirth,
      gender: pgender,
      maritalStatus: pmarriage,
      telecom: pcontact,
      address: paddress,
      contact: prelation,
      communication: planguage,
    };
    this.shadowRoot.getElementById("ajax").generateRequest();
  }
}

window.customElements.define("create-patient", CreatePatient);
