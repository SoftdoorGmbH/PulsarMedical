import {
  ExternalLink,
  LegalH2,
  LegalH3,
  LegalSubtitle,
} from "@/components/LegalContent";

export function PluginsSection() {
  return (
    <>
      <LegalH2>Plugins und Tools</LegalH2>

      <LegalH3>WP Statistics</LegalH3>
      <p>
        Diese Website nutzt das Analysetool WP Statistics, um Besucherzugriffe
        statistisch auszuwerten. Anbieter ist Veronalabs, ARENCO Tower, 27th
        Floor, Dubai Media City, Dubai, Dubai 23816, UAE (
        <ExternalLink href="https://veronalabs.com">https://veronalabs.com</ExternalLink>
        ).
      </p>
      <p>
        Mit WP Statistics können wir die Nutzung unserer Website analysieren. WP
        Statistics erfasst dabei u. a. Logdateien (IP-Adresse, Referrer,
        verwendete Browser, Herkunft des Nutzers, verwendete Suchmaschine) und
        Aktionen, die die Websitebesucher auf der Seite getätigt haben (z. B.
        Klicks und Ansichten).
      </p>
      <p>
        Die mit WP Statistics erfassten Daten werden ausschließlich auf unserem
        eigenen Server gespeichert.
      </p>
      <p>
        Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. f DSGVO. Wir haben ein berechtigtes Interesse an der anonymisierten
        Analyse des Nutzerverhaltens, um sowohl unser Webangebot als auch unsere
        Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt
        wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die
        Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO; die Einwilligung ist jederzeit widerrufbar.
      </p>

      <LegalSubtitle>IP-Anonymisierung</LegalSubtitle>
      <p>
        Wir verwenden WP Statistics mit anonymisierter IP. Ihre IP-Adresse wird
        dabei gekürzt, sodass diese Ihnen nicht mehr direkt zugeordnet werden
        kann.
      </p>

      <LegalH3>MouseFlow</LegalH3>
      <p>
        Auf dieser Website ist das Webanalyse-Tool MouseFlow eingebunden.
        Anbieter ist die Mouseflow ApS, Flaesketorvet 68, 1711 Kopenhagen,
        Dänemark (nachfolgend »MouseFlow«).
      </p>
      <p>
        Mit MouseFlow ist es möglich, stichprobenartig ein Protokoll der
        Mausbewegungen und Klicks mit der Absicht einzelne Website-Besuche
        abzuspielen und potentielle Verbesserungen für die Website daraus
        abzuleiten. Die mit MouseFlow erhobenen Daten werden ohne die gesondert
        erteilte Zustimmung des Betroffenen nicht dazu benutzt, den Besucher
        dieser Website persönlich zu identifizieren und werden auch nicht
        weitergegeben. Sie können diese Datenverarbeitung durch MouseFlow
        verhindern, indem Sie in den Einstellungen Ihrs Webbrowsers die
        Verwendung von Cookies deaktivieren.
      </p>
      <p>
        Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung
        nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
        Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p>
        Weitere Informationen über die Datenverarbeitung durch MouseFlow finden
        Sie hier:{" "}
        <ExternalLink href="https://mouseflow.com/legal/company/privacy-policy/">
          https://mouseflow.com/legal/company/privacy-policy/
        </ExternalLink>
        .
      </p>
      <p>
        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des
        oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen
        datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass
        dieser die personenbezogenen Daten unserer Websitebesucher nur nach
        unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
      </p>
    </>
  );
}
