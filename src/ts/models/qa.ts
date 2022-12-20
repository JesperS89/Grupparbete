export class QA {
    constructor(
        public question: string,
        public answer: string
    )
    {}
}

export const faqList: QA[] = [new QA("Hur kommer jag i kontakt med er?", "Använd vårt formulär under 'kontakt'."), new QA("Var är mitt paket?", "När din order skickas från vårt lager får du en leveransbekräftelse till din e-postadress. I denna finns ett kolli-id/sändningsnummer som du kan klicka på för att spåra din försändelse."), new QA("Hur kan er sida vara så djävla bra?", "Hårt arbete.")]