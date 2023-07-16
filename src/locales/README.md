# 使用

默认为多语言文件全部引入，可按照页面按需加载

`main.tsx`中初始化

```jsx
import { initI18n } from '@/locales/index';

initI18n();
```

```jsx
import { useTranslation } from 'react-i18next';

const Page = () => {
  // 按页面引入
  //const { t } = useTranslation('index');
  // 全部引入
  const { t } = useTranslation();

  return (
    <div>
      {t('welcome')}
    </div>
  );
};
```

# 切换语言

```jsx
import { changeLanguage } from '@/locales';

const Page = () => {
  return (
    <button onClick={() => changeLanguage('en-US')}>en</button>
  );
};
```
