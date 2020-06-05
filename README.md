

## ESM Demos


### Hello ESM

```html
<script type="module">
  import moment from 'https://cdn.pika.dev/moment@^2.26.0';

  document.querySelector('p').innerHTML = `This date is formated by moment: ${
    moment().format('YYYY-MM-DD HH:mm:ss')
  }`;
</script>
```