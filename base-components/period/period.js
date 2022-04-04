import { LitElement, html } from "lit";
import moment from "moment";
import "@material/mwc-textfield";

class Period extends LitElement {
  static get properties() {
    return {
      value: { type: Object, reflect: true },
      start: { type: Boolean },
      end: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.value = { start: moment().toISOString(), end: moment().toISOString() };
    this.start = true;
    this.end = false;
  }

  render() {
    if (this.value != undefined) {
      if (typeof this.value === "string") {
        if (JSON.parse(this.value).start != undefined) {
          var startDate = moment(JSON.parse(this.value).start).format(
            "YYYY-MM-DDTHH:mm:ss"
          );
        }
        if (JSON.parse(this.value).end != undefined) {
          var endDate = moment(JSON.parse(this.value).end).format(
            "YYYY-MM-DDTHH:mm:ss"
          );
        }
      } else if (typeof this.value == "object") {
        if (this.value.start != undefined) {
          var startDate = moment(this.value.start).format(
            "YYYY-MM-DDTHH:mm:ss"
          );
        }
        if (this.value.end != undefined) {
          var endDate = moment(this.value.end).format("YYYY-MM-DDTHH:mm:ss");
        }
      }
    }
    return html`
      ${this.start
        ? html`<mwc-textfield
            label="Start"
            outlined
            id="start"
            class="startField"
            type="datetime-local"
            .value="${startDate}"
            @input="${(e) => (this.value.start = e.target.value)}"
          ></mwc-textfield>`
        : ""}
      ${this.end
        ? html`<mwc-textfield
            label="End"
            outlined
            class="endField"
            type="datetime-local"
            .value="${endDate}"
            @input="${(e) => (this.value.end = e.target.value)}"
          ></mwc-textfield>`
        : ""}
    `;
  }
}

window.customElements.define("time-period", Period);
