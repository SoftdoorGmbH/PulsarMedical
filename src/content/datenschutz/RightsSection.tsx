import { LegalH2, LegalH3, LegalList, LegalSubtitle } from "@/components/LegalContent";

export function RightsSection() {
  return (
    <>
      <LegalH2>Ihre Rechte als Betroffener</LegalH2>

      <p>
        Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener
        i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem
        Verantwortlichen zu:
      </p>

      <LegalH3>Auskunftsrecht</LegalH3>
      <p>
        Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen,
        ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden.
      </p>
      <p>
        Liegt eine solche Verarbeitung vor, können Sie von dem Verantwortlichen
        über folgende Informationen Auskunft verlangen:
      </p>
      <LegalList
        items={[
          "die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;",
          "die Kategorien von personenbezogenen Daten, welche verarbeitet werden;",
          "die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;",
          "die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;",
          "das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;",
          "das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;",
          "alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;",
          "das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.",
        ]}
      />
      <p>
        Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie
        betreffenden personenbezogenen Daten in ein Drittland oder an eine
        internationale Organisation übermittelt werden. In diesem Zusammenhang
        können Sie verlangen, über die geeigneten Garantien gem. Art. 46 DSGVO
        im Zusammenhang mit der Übermittlung unterrichtet zu werden.
      </p>

      <LegalH3>Recht auf Berichtigung</LegalH3>
      <p>
        Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber
        dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten,
        die Sie betreffen, unrichtig oder unvollständig sind. Der Verantwortliche
        hat die Berichtigung unverzüglich vorzunehmen.
      </p>

      <LegalH3>Recht auf Einschränkung der Verarbeitung</LegalH3>
      <p>
        Unter den folgenden Voraussetzungen können Sie die Einschränkung der
        Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:
      </p>
      <LegalList
        items={[
          "wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;",
          "die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;",
          "der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder",
          "wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.",
        ]}
      />
      <p>
        Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten
        eingeschränkt, dürfen diese Daten – von ihrer Speicherung abgesehen – nur
        mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
        oder juristischen Person oder aus Gründen eines wichtigen öffentlichen
        Interesses der Union oder eines Mitgliedstaats verarbeitet werden.
      </p>
      <p>
        Wurde die Verarbeitung nach den o. g. Voraussetzungen eingeschränkt,
        werden Sie von dem Verantwortlichen unterrichtet, bevor die Einschränkung
        aufgehoben wird.
      </p>

      <LegalH3>Recht auf Löschung</LegalH3>

      <LegalSubtitle>Löschungspflicht</LegalSubtitle>
      <p>
        Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden
        personenbezogenen Daten unverzüglich gelöscht werden, und der
        Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen,
        sofern einer der folgenden Gründe zutrifft:
      </p>
      <LegalList
        items={[
          "Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.",
          "Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.",
          "Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.",
          "Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.",
          "Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.",
          "Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.",
        ]}
      />

      <LegalSubtitle>Information an Dritte</LegalSubtitle>
      <p>
        Hat der Verantwortliche die Sie betreffenden personenbezogenen Daten
        öffentlich gemacht und ist er gem. Art. 17 Abs. 1 DSGVO zu deren
        Löschung verpflichtet, so trifft er unter Berücksichtigung der
        verfügbaren Technologie und der Implementierungskosten angemessene
        Maßnahmen, auch technischer Art, um für die Datenverarbeitung
        Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu
        informieren, dass Sie als betroffene Person von ihnen die Löschung aller
        Links zu diesen personenbezogenen Daten oder von Kopien oder
        Replikationen dieser personenbezogenen Daten verlangt haben.
      </p>

      <LegalSubtitle>Ausnahmen</LegalSubtitle>
      <p>Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist</p>
      <LegalList
        items={[
          "zur Ausübung des Rechts auf freie Meinungsäußerung und Information;",
          "zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;",
          "aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und lit. i sowie Art. 9 Abs. 3 DSGVO;",
          "für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder",
          "zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
        ]}
      />

      <LegalH3>Recht auf Unterrichtung</LegalH3>
      <p>
        Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der
        Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser
        verpflichtet, allen Empfängern, denen die Sie betreffenden
        personenbezogenen Daten offengelegt wurden, diese Berichtigung oder
        Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es
        sei denn, dies erweist sich als unmöglich oder ist mit einem
        unverhältnismäßigen Aufwand verbunden.
      </p>
      <p>
        Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über diese
        Empfänger unterrichtet zu werden.
      </p>

      <LegalH3>Recht auf Datenübertragbarkeit</LegalH3>
      <p>
        Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie
        dem Verantwortlichen bereitgestellt haben, in einem strukturierten,
        gängigen und maschinenlesbaren Format zu erhalten. Außerdem haben Sie
        das Recht diese Daten einem anderen Verantwortlichen ohne Behinderung
        durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt
        wurden, zu übermitteln, sofern
      </p>
      <LegalList
        items={[
          "die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO beruht und",
          "die Verarbeitung mithilfe automatisierter Verfahren erfolgt.",
        ]}
      />
      <p>
        In Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken, dass
        die Sie betreffenden personenbezogenen Daten direkt von einem
        Verantwortlichen einem anderen Verantwortlichen übermittelt werden,
        soweit dies technisch machbar ist. Freiheiten und Rechte anderer
        Personen dürfen hierdurch nicht beeinträchtigt werden.
      </p>
      <p>
        Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung
        personenbezogener Daten, die für die Wahrnehmung einer Aufgabe
        erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung
        öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.
      </p>

      <LegalH3>Widerspruchsrecht</LegalH3>
      <p>
        <strong>
          Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen
          Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
          personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder lit.
          f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf
          diese Bestimmungen gestütztes Profiling.
        </strong>
      </p>
      <p>
        <strong>
          Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen
          Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe
          für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
          Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen.
        </strong>
      </p>
      <p>
        <strong>
          Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
          Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch
          gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum
          Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling,
          soweit es mit solcher Direktwerbung in Verbindung steht.
        </strong>
      </p>
      <p>
        <strong>
          Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so
          werden die Sie betreffenden personenbezogenen Daten nicht mehr für
          diese Zwecke verarbeitet.
        </strong>
      </p>
      <p>
        <strong>
          Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten
          der Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG –
          Ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei
          denen technische Spezifikationen verwendet werden.
        </strong>
      </p>

      <LegalH3>Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</LegalH3>
      <p>
        Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung
        jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die
        Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten
        Verarbeitung nicht berührt.
      </p>

      <LegalH3>
        Automatisierte Entscheidung im Einzelfall einschließlich Profiling
      </LegalH3>
      <p>
        Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten
        Verarbeitung – einschließlich Profiling – beruhenden Entscheidung
        unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet
        oder Sie in ähnlicher Weise erheblich beeinträchtigt. Dies gilt nicht,
        wenn die Entscheidung
      </p>
      <LegalList
        items={[
          "für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und dem Verantwortlichen erforderlich ist,",
          "aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen enthalten oder",
          "mit Ihrer ausdrücklichen Einwilligung erfolgt.",
        ]}
      />
      <p>
        Allerdings dürfen diese Entscheidungen nicht auf besonderen Kategorien
        personenbezogener Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht
        Art. 9 Abs. 2 lit. a oder lit. g DSGVO gilt und angemessene Maßnahmen
        zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten Interessen
        getroffen wurden.
      </p>
      <p>
        Hinsichtlich der Vertragserfüllung und Einwilligung trifft der
        Verantwortliche angemessene Maßnahmen, um die Rechte und Freiheiten sowie
        Ihre berechtigten Interessen zu wahren, wozu mindestens das Recht auf
        Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf
        Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung
        gehört.
      </p>

      <LegalH3>Recht auf Beschwerde bei einer Aufsichtsbehörde</LegalH3>
      <p>
        Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
        Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer
        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts,
        Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn
        Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
        personenbezogenen Daten gegen die DSGVO verstößt.
      </p>
      <p>
        Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde,
        unterrichtet den Beschwerdeführer über den Stand und die Ergebnisse der
        Beschwerde einschließlich der Möglichkeit eines gerichtlichen
        Rechtsbehelfs nach Art. 78 DSGVO.
      </p>
    </>
  );
}
