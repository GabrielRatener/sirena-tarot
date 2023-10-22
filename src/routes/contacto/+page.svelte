<script>

  import Fa from 'svelte-fa'
  import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
	import contacto from '$lib/data/contacto.yaml'
  import { formatNumber } from '$lib/utils.js'

  const links = [
    {
      icon: faWhatsapp,
      href: `https://wa.me/${contacto.numero}`,
      text: formatNumber(contacto.numero)
    },
    {
      icon: faInstagram,
      href: `https://instagram.com/${contacto.instagram}`,
      text: `@${contacto.instagram}`
    },
    {
      icon: faEnvelope,
      href: `mailto:${contacto.email}`,
      text: contacto.email
    }
  ]

</script>
<section>
	<h1 class="titulo-pagina">{contacto.titulo}</h1>
  <p>{contacto.introducion}</p>
  <ul class="contactos">
    {#each links as link}
      <li>
        <div class="link-container">
          <a href={link.href}>
            <div class="link-content">
              <div class="center-box">
                <Fa icon={link.icon} scale={1.2} style="margin-right: 10px;" translateY={-0.1} />
                <span class="link-text">{link.text}</span>
              </div>
            </div>
          </a>
        </div>
      </li>
    {/each}
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

  .link-container {
    height: 40px;
  }

  .link-container a {
    height: 100%;
    display: inline-block;

    color: black;
  }

  .link-container .link-content {
    height: 100%;
    display: inline-block;
  }

  .link-container .center-box {
    height: 100%;
  }

  .link-container .center-box svg {
    margin-right: 10px !important;
  }

  .link-text {
    font-size: 1em;
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 5px;
  }

</style>
