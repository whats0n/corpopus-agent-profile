<template>
  <div :class="$style.container">
    <section>
      <p>
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id. Eget quis mi enim, leo lacinia pharetra, semper.
      </p>
      <p>
        Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
        fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit
        tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
        molestie aliquet sodales id est ac volutpat.
      </p>
    </section>
    <section>
      <h2>What information do we collect?</h2>
      <p>
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio
        nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi
        bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
      </p>
      <p>
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
        commodo consectetur convallis risus. Sed condimentum enim dignissim
        adipiscing faucibus consequat, urna. Viverra purus et erat auctor
        aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
        ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
        lectus in tellus, pharetra, porttitor.
      </p>
      <p>
        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.
        Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie
        sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut
        tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
      </p>
    </section>
    <section>
      <h2>How do we use your information?</h2>
      <p>
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio
        nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi
        bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
      </p>
      <p>
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
        commodo consectetur convallis risus. Sed condimentum enim dignissim
        adipiscing faucibus consequat, urna. Viverra purus et erat auctor
        aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
        ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
        lectus in tellus, pharetra, porttitor.
      </p>
      <p>
        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.
        Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie
        sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut
        tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
      </p>
    </section>
    <section>
      <h2>Do we use cookies and other tracking technologies?</h2>
      <p>
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
        aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget
        a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </p>
    </section>
    <section>
      <h2>How long do we keep your information?</h2>
      <p>
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
        aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget
        a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </p>
    </section>
    <section>
      <h2>How do we keep your information safe?</h2>
      <p>
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
        aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget
        a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </p>
    </section>
    <section>
      <h2>What are your privacy rights?</h2>
      <p>
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
        aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget
        a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </p>
    </section>
    <section>
      <h2>How can you contact us about this policy?</h2>
      <p>
        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
        sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum
        lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at
        diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus
        vulputate gravida id. Sed quis auctor vulputate hac elementum gravida
        cursus dis.
      </p>
      <ol>
        <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
        <li>
          Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse.
          Auctor vel in vitae placerat.
        </li>
        <li>
          Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
        </li>
      </ol>
    </section>
  </div>
</template>

<style lang="scss" module>
.container {
  margin-inline: auto;
  max-width: 752px;
  padding-inline: 16px;
  padding-bottom: 64px;

  @include helpers.media(sm) {
    padding-bottom: 96px;
  }

  section {
    &:not(:last-child) {
      margin-bottom: 32px;

      @include helpers.media(sm) {
        margin-bottom: 40px;
      }
    }
  }

  h2 {
    margin-bottom: 16px;
    color: var(--gray-900);
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    @include helpers.media(sm) {
      margin-bottom: 20px;
      font-size: 30px;
      line-height: 38px;
    }
  }

  p,
  ol,
  ul {
    color: var(--gray-600);
    font-size: 16px;
    line-height: 24px;

    @include helpers.media(sm) {
      font-size: 18px;
      line-height: 28px;
    }

    &:not(:last-child) {
      margin-bottom: 24px;

      @include helpers.media(sm) {
        margin-bottom: 28px;
      }
    }
  }

  ol {
    padding-left: 32px;
  }

  ol li {
    list-style-type: decimal;
  }
}
</style>
