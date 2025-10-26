import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0a2a38] via-[#1d4a5f] to-[#0a2a38] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-[#2d9bf0] hover:underline mb-8">&larr; Zurück zur Startseite</a>
        <h1 className="text-4xl font-bold mb-8 gradient-text">Datenschutzerklärung</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-semibold text-white">1. Allgemein</h2>
          <p>
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Erhebung und Verarbeitung von Personendaten</h2>
          <p>
            Wir erheben und verarbeiten Personendaten, die Sie uns freiwillig zur Verfügung stellen, wenn Sie mit uns in Kontakt treten, beispielsweise über unser Kontaktformular. Diese Daten (wie Name, E-Mail-Adresse, Telefonnummer) werden ausschliesslich zur Bearbeitung Ihrer Anfrage und für die damit verbundene technische Administration verwendet.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Cookies</h2>
          <p>
            Unsere Website kann Cookies verwenden. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Server-Log-Dateien</h2>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p>
            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Auskunfts-, Löschungs- und Sperrungsrecht</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Änderungen</h2>
          <p>
            Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
