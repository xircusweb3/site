import { Select } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import Router, { useRouter } from "next/router";

export const changeLocale = async ({ target: { value } }) => {
  await Router.push('/', '/', { locale: value || 'en' })
  Router.reload()
}

export const ChangeLocale = (props) => {
  const router = useRouter()
  return (
    <Select
      maxW={120} defaultValue={router.locale}
      borderRadius="full"
      fontWeight="bold"
      size="sm"
      variant="ghost"
      bg="rgba(0,0,0,0.5)"
      _focus={{ boxShadow: 'none' }}
      _hover={{ bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' }}
      icon={<ChevronDownIcon />}
      onChange={changeLocale}
      {...props}>
      <option value="en">English</option>
      <option value="zh">中文</option>
      <option value="es">Spanish</option>
      <option value="ru">Russian</option>
    </Select>    
  )
}


{/* <option value="zh">中文</option>
<option value="ru">Russian</option>
<option value="jp">日本</option>
<option value="ko">한글</option>
<option value="es">Español</option>
<option value="pt">Portuguese</option>
<option value="ar">Arabic</option>
<option value="th">Thai</option>
<option value="vi">Tiếng Việt</option>
<option value="tr">Turkish</option> */}