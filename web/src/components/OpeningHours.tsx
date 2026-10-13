import { CLINIC } from "../data/site";

export default function OpeningHours({ compact = false }: { compact?: boolean }) {
  const h = CLINIC.hours;
  if (compact) {
    return (
      <p style={{ margin: 0 }}>
        {h.weekdays}: {h.morning} · {h.evening}
        <br />
        Sunday: {h.sunday}
      </p>
    );
  }
  return (
    <table className="hours-table">
      <caption className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        Clinic opening hours
      </caption>
      <tbody>
        <tr>
          <th scope="row">{h.weekdays}</th>
          <td>
            <span className="session-tag">Morning</span>
            {h.morning}
            <br />
            <span className="session-tag">Evening</span>
            {h.evening}
          </td>
        </tr>
        <tr>
          <th scope="row">Sunday</th>
          <td className="closed">{h.sunday}</td>
        </tr>
      </tbody>
    </table>
  );
}
