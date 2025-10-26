import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2a38] via-[#1d4a5f] to-[#0a2a38] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-[#2d9bf0] hover:underline mb-8">&larr; Zurück zur Startseite</a>
        <h1 className="text-4xl font-bold mb-8 gradient-text">Impressum</h1>
        
        <div className="space-y-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-white">Angaben gemäss Art. 3 Abs. 1 lit. s UWG</h2>
          <p>Digilevate</p>
          <p>c/o Loris Imbrogno & Alessio Fano</p>
          <p>Musterstrasse 123</p>
          <p>8000 Zürich, Schweiz</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">Kontakt</h2>
          <p>E-Mail: info@digilevate.com</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">Vertretungsberechtigte Personen</h2>
          <p>Loris Imbrogno</p>
          <p>Alessio Fano</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">Haftungsausschluss</h2>
          <p>
            Die Autoren übernehmen keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            Haftungsansprüche gegen die Autoren wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
          </p>
          <p>
            Alle Angebote sind unverbindlich. Die Autoren behalten es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">Haftung für Links</h2>
          <p>
            Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">Urheberrechte</h2>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Digilevate oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
