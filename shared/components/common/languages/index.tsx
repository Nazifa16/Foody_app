import Image from 'next/image'
import React, { useState } from 'react'

function Languages() {
    const [language, setLanguage] = useState(true)
    return (
        <div className='relative max-w-[42px]'>
            <Image src="/azLanguageIcon.svg" width={0} height={0} alt='azLanguageIcon' className='w-10 h-10' />
        </div>
    )
}

export default Languages