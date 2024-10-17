import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect } from 'react'

export default function MakamsModal() {
  const [opened, { open, close }] = useDisclosure(false)

  useEffect(() => {
    // open modal on first render
    open()
  }, [])
  return (
    <Modal
      size={'70rem'}
      classNames={{
        content: 'bg-white text-gray-900',
        header: 'bg-slate-800 text-white',
      }}
      opened={opened}
      onClose={close}
      title='Seyir modelleri bilgilendirme'
      c={'dark'}
    >
      {/* Modal content */}
      <p className='my-4'>
        Bu sayfada, kaynaklardaki makam tanımları ve bu tanımlar doğrultusunda modellenmiş Perde ve Perde/Çeşni seyir
        şemalarını inceleyebilir, ney ve lavta ile çalınmış örnek ses kayıtlarını* dinleyebilirsiniz.
      </p>
      <p className='mb-4'>Seyir modellerinin oluşturulmasında yararlanılan başlıca kaynaklar şunlardır:</p>
      <ul className='mb-4 list-disc pl-10'>
        <li>
          Yusuf Kırşehri, <i>Risale-i Mûsikî</i> [1411] (Doğrusöz, 2012)
        </li>
        <li>
          Hızır Bin Abdullah, <i>Kitabü'l-Edvâr</i> [1441] (Çelik, 2001)
        </li>
        <li>
          Kadızâde Mehmed Tirevî, <i>Risale-i Mûsikî</i> [1492] (Uygun, 1990)
        </li>
        <li>
          Dimitri Kantemir, <i>Kitâbu İlmi’l-Musiki alâ Vechi’l-Hurufât</i> [1700?] (Tura, 2002)
        </li>
        <li>
          Kemani Hızır Ağa, <i>Tefhîmü'l-Makamât fi Tevlîdi'n-Nağamât</i> [1740?] (Tekin, 2003)
        </li>
        <li>
          Abdülbaki Nasır Dede, <i>Tedkik ü Tahkik</i> [1794] (Tura, 2006)
        </li>
        <li>
          Haşim Bey, <i>Mecmûa-i Kârhâ ve Nakşhâ ve Şarkiyyât</i> [1864] (Yalçın, 2016)
        </li>
        <li>
          Rauf Yekta, “La Musique Turquie”, <i>Encyclopédie de la musique et dictionnaire du Conservatoire</i> (Albert
          Lavignac, ed., 1922)
        </li>
        <li>
          İsmail Hakkı Özkan, <i>Türk Musikisi Nazariyatı ve Usulleri Küdüm Velveleleri</i>, 1987
        </li>
        <li>
          Yakup Fikret Kutluğ, <i>Türk Musikisinde Makamlar</i>, 2000
        </li>
      </ul>
      <p className='mb-4'>
        Her makam için kaynaklarda belirtilen farklı seyir varyasyonları dikkate alınmış, 150 farklı makam seyir şeması
        oluşturulmuş ve böylece hem klasik hem de güncel Türk müziği teorileri bir araya getirilmiştir.
      </p>
      <p className='mb-4'>
        Modelde “Başlangıç” ve “Karar” bölümleri arasında yer alan “Seyir” bölümündeki Perde/Çeşni yapılarının belirli
        bir sırayla kullanılma zorunluluğu yoktur. Bu Perde/Çeşni yapılarının ilişkide olduğu diğer Perde/Çeşni
        yapılarını incelemek ve makamların olası geçkileri ve genişlemeleri hakkında daha fazla bilgi edinmek için
        “Çeşni Evreni” ve “Makam Ağı” sayfalarına göz atabilirsiniz.
      </p>
      <small>*Tüm kayıtlar 4 ses aşağıdan (Rast = 440 Hz) çalınmıştır.</small>
    </Modal>
  )
}
