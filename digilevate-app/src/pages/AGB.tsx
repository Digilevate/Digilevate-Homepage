import React from 'react';

const AGB: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2a38] via-[#1d4a5f] to-[#0a2a38] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-[#2d9bf0] hover:underline mb-8">&larr; Zurück zur Startseite</a>
        <h1 className="text-4xl font-bold mb-8 gradient-text">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-semibold text-white">1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) regeln das Vertragsverhältnis zwischen Digilevate (nachfolgend "Anbieter") und ihren Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Vertragsabschluss</h2>
          <p>
            Der Vertrag kommt durch die Annahme des Angebots des Anbieters durch den Kunden zustande. Angebote sind, sofern nicht anders angegeben, 30 Tage gültig. Der Vertrag kann schriftlich oder durch konkludentes Handeln, wie die Inanspruchnahme der Dienstleistung, zustande kommen.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Leistungen des Anbieters</h2>
          <p>
            Der Anbieter erbringt Dienstleistungen im Bereich Webdesign, Webentwicklung und Online-Marketing. Der genaue Umfang der Leistungen ergibt sich aus dem individuellen Angebot. Der Anbieter ist berechtigt, zur Erbringung der Leistungen Dritte beizuziehen.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Pflichten des Kunden</h2>
          <p>
            Der Kunde ist zur Mitwirkung verpflichtet. Er stellt dem Anbieter alle für die Leistungserbringung notwendigen Inhalte (Texte, Bilder, etc.) rechtzeitig und in geeigneter Form zur Verfügung. Der Kunde versichert, dass er über die erforderlichen Rechte an den bereitgestellten Inhalten verfügt.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Vergütung und Zahlungsbedingungen</h2>
          <p>
            Die Vergütung richtet sich nach dem im Angebot festgelegten Preis. Sofern nicht anders vereinbart, sind 50% der Vergütung bei Vertragsabschluss und 50% bei Projektabnahme fällig. Rechnungen sind innerhalb von 14 Tagen ohne Abzug zu begleichen.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Haftung</h2>
          <p>
            Der Anbieter haftet nur für Schäden, die auf grobe Fahrlässigkeit oder Vorsatz zurückzuführen sind. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen. Der Anbieter haftet nicht für Rechtsverletzungen, die durch die vom Kunden zur Verfügung gestellten Inhalte entstehen.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Geistiges Eigentum</h2>
          <p>
            Sämtliche Urheberrechte und sonstigen geistigen Eigentumsrechte an den vom Anbieter geschaffenen Werken (Designs, Code, etc.) verbleiben beim Anbieter, bis die vollständige Vergütung bezahlt wurde. Danach wird dem Kunden ein nicht-exklusives, zeitlich und örtlich unbeschränktes Nutzungsrecht eingeräumt.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">8. Schlussbestimmungen</h2>
          <p>
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck der ursprünglichen Bestimmung am nächsten kommt.
          </p>
          <p>
            Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand ist Zürich.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AGB;
