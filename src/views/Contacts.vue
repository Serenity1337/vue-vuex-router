<template>
<div id="Contacts">
  <h1 class="contacts-title"> kontaktai </h1>
  <form action="">
    <label for="name">
      vardas
    </label>
<Appinput>
</Appinput>
<label for="zinute">
  zinute
</label>
<Apptextinput/>
<input type="submit" value="siusti" class = 'button'>
</form>
</div>
</template>

<script>
import Appinput from '@/components/Appinput'
import Apptextinput from '@/components/Apptextinput'

export default {
  name: 'Contacts',
  components: {
    Appinput,
    Apptextinput
  }
}
</script>

<style lang = 'scss' scoped>
.contacts-title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  form {
    label {
      display: block;
      margin-bottom: 10px;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
  .button {
    font-size: 14px;
    color: #ffffff;
    background-color: #3252E5;
    padding: 12px 62px;
    border: 3px solid #3252E5;
    margin: 45px 0px 66px 0px;
    text-transform: uppercase;
  }
</style>
