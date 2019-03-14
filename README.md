<center><h1>hero-tag-link-card</h1></center>

Generate a link card on your [Hexo](https://hexo.io/) article.

![](https://cdn.mayuko.cn/blog/20190314121644.png)

## Installation

```bash
npm install hexo-tag-link-card
```

## Usage

Use tags:

```
{% linkCard url title desc %}
```

Example:

```
{% linkCard https://blog.mayuko.cn Title Desc %}
```

Then, it generates HTML:

```html
<a class="link-card" href="https://blog.mayuko.cn/" target="_blank">
  <div class="link-card__content">
    <h1>Title</h1>
    <p>Desc</p>
  </div>
</a>
```

Notice: Make sure there are no SPACES in Title or Desc.

## Options

- className: You can customize the class name. (Default:`link-card & link-card__content`)

By modifying the `_config.yml` file under the Hexo root directory.

```yaml
linkCard:
  className: link-card
```

## Style

You can customize the style by modifying the class name.

Example：

- [View in CodePen](https://codepen.io/mayuko2012/pen/WmdWRV)

## License

MIT