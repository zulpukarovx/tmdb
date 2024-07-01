'use client'

import { motion } from 'framer-motion'
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';


const SearchForm: React.FC = () => {

  const [isFocused, setIsFocused] = useState(false);

  const inputVariants = {
    initial: { width: '13rem' },
    focused: { width: '100%' },
  };


  return (
    <motion.form 
      variants={inputVariants}
      initial={inputVariants.initial}
      animate={isFocused ? inputVariants.focused : inputVariants.initial}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='flex items-center gap-1'
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      action="submit"
    >
      <motion.span
        initial={{opacity: 1}}
        animate={isFocused ? {opacity: 0} : {opacity: 1}}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <SearchIcon width='18' />
      </motion.span>
      <input 
        className='outline-none w-full py-2 text-xs' 
        type="text" 
        placeholder="Search your favourite movies"
      />
    </motion.form>
  )
}

export default SearchForm