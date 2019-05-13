Navbar:

```js
import NavbarItem from './NavbarItem';
import Button from '../Button/Button';

<Navbar
  actions={[
    <Button text='Signup' />,
    <Button variant='primary' text='Login' />,
  ]}
  logo={
    <div>
      <h1>Logo Sample</h1>
    </div>
  }
>
  <NavbarItem title='Home' active />
  <NavbarItem title='Blog' />
  <NavbarItem title='About Us' />
</Navbar>;
```
