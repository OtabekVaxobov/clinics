import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export function Questions() {
    return(
        <div className="flex flex-col justify-center pt-8">
        <p>Kop beriladigan savollar</p>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>Ultratovush tekshiruvi qachon amalga oshiriladi?</AccordionTrigger>
            <AccordionContent className="p-4">
            Agar homiladorlik normal bo&apos;lsa, xalqaro standartlarga muvofiq, quyidagi rejalashtirilgan vaqtlarda ultratovush tekshiruvidan o&apos;tish tavsiya etiladi:
            <ul>
                <br/>
                <li>
                    birinchi trimestrda - 11-13 xaftada (+ 6 kun)
                </li>
                <li>
                    ikkinchi trimestrda - 19-22 xaftada
                </li>
                <li>
                    uchinchi trimestrda - 30-34 xaftada
                </li>
            </ul>


            </AccordionContent>
             </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>Tug&apos;ilish qancha davom etadi?</AccordionTrigger>
            <AccordionContent className="p-4">
            <ul>
                <li>
                    Birinchi tug&apos;ilishning o&apos;rtacha davomiyligi 10-12 soat,
                </li>
                
                <li>
                    ikkinchisi 6-8 soat va umuman tug&apos;ilishning davomiyligi har bir kishi uchun individualdir va ko&apos;p sabablarga bog&apos;liq:<br/>
                     yoshi, homila vazni, ayolning tana massasi indeksi va boshqalar.
                </li>
            </ul>


            </AccordionContent>
             </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>Homiladorlik o&apos;rtasidagi optimal interval qanday?</AccordionTrigger>
            <AccordionContent className="p-4">
             <ul>
                <li>
                    Homiladorlik paytida tanadagi stress bilan 
                    bog&apos;liq asoratlarni oldini olish uchun tug&apos;ilish orasidagi optimal interval 2 - 2,5 yil bo&apos;lishi kerak. Hisoblash bir yil 
                    davomida emizishni, to&apos;qqiz oy davomida laktatsiya davridan keyin tiklanishni hisobga oladi va taxminan olti oy tanadagi 
                    ozuqa moddalari, mikroelementlar va vitaminlar bilan to&apos;ldirish uchun ajratiladi. Ammo bu emizikli bo&apos;lmagan ayollarga 
                    "muhlat" kerak emas degani emas, chunki tug&apos;ilgandan keyin reproduktiv tizimning barcha a&apos;zolari (bachadon, tuxumdonlar), 
                    tos bo&apos;shlig&apos;i mushaklari, sut bezlari, shuningdek, gormonal darajalar, miqdori va tarkibi. normal holatga qaytishi kerak.
                </li>
                <li>
                    Operatsiya bo&apos;lgan ayollarga kelsak, ular uchun optimal tanaffus 3-5 yil bo&apos;lib, bu bachadonda sog&apos;lom chandiq hosil bo&apos;lishi uchun zarurdir.
                </li>
                <li>
                    Oldingi abortdan keyin tug&apos;ilishni nazorat qilishning minimal muddati - 6 oy. Istalgan homiladorlik abortdan (abortdan) 
                    bir yil o&apos;tgach va aniqlangan kasalliklarni to&apos;liq tekshirish va davolashdan keyin sodir bo&apos;lsa, optimal hisoblanadi. 
                    Aynan shu davrda tana to&apos;liq tiklanadi va uning oldingi zo&apos;ravonlik / o&apos;z-o&apos;zidan tugashi bilan bog&apos;liq homiladorlik asoratlari 
                    xavfi kamayishi kerak.
                </li>
             </ul>
            </AccordionContent>
             </AccordionItem>
        </Accordion>
        </div>
    )
}