Layout HTML

```
<div>
  <nav className='top-nav top-nav-light cf' role='navigation'>
    <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
    <label htmlFor='menu-toggle'>Menu</label>
    <ul className='list-unstyled list-inline cf'>
      <li>Labelr</li>
      <li><a href='/repos'>Repos</a></li>
      <li className='pull-right'><a href='/logout'>Logout</a></li>
    </ul>
  </nav>
  <div className='container'>
  </div>
</div>
```

GitHub auth

```
'https://github.com/login/oauth/authorize?' + x
```

```
{
  scope: 'user,repo',
  redirect_uri: {something} + '/auth/callback',
  client_id: 'f8dd69187841cdd22a26'
}
```

```
http://labelr-dev.herokuapp.com/authenticate/CODE'
```

Login page:

```
<div className='container'>
  <header role='banner'>
    <h1>Labelr</h1>
  </header>
  <div>
    <p>We label stuff for you, because, we can&trade;</p>
    <a href='/login' className='button button-large'>
      <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
    </a>
  </div>
</div>
```

Styles

```
header
  padding-top: 50px

.label
  height: 40px

  .label-color
    width: 24px
    height: 24px
    border: 1px solid grey
    border-radius: 20px
    display: inline-block

  > span
    margin-left: 10px
    margin-right: 10px

```

Repo Item
```
<div>
  <a href=""><span className='octicon octicon-repo'></span></a>
</div>
```

Repo Detail

```
<div className='container'>
  <h1></h1>
  <p></p>
  <ul></ul>
</div>
```

Labels

```
<form className='label'>
  <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
  <input name='name'/>
  <input name='color'/>
  <button type='submit' className='button button-small'>Save</button>
  <button type='button' className='button button-small button-unstyled'>cancel</button>
</form>
```

```
<div className='label'>
  <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
  <span></span>
  <span className='octicon octicon-pencil'></span>
  <span className='octicon octicon-x'></span>
</div>
```