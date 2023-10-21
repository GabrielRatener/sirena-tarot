<script>
	import contacto from '$lib/data/contacto.yaml'

</script>
<section>
	<h1 class="titulo-pagina">{contacto.titulo}</h1>
  <p>{contacto.introducion}</p>
  <ul class="contactos">
    <li><a href={`tel:${contacto.numero}`}>{contacto.numero}</a></li>
    <li><a href={`mailto:${contacto.email}`}>{contacto.email}</a></li>
  </ul>
</section>
<style lang="scss">
  ul.contactos {
    list-style-type: none;
  }

  ul.contactos li {
    padding: 10px;
  }

  ul.contactos li a {
    text-decoration: none;
  }
</style>
