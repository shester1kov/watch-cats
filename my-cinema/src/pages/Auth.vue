<template>
  <section class="grid place-items-center">
    <div class="w-full max-w-md rounded-3xl bg-[--color-panel] border border-zinc-700 p-6">
      <h1 class="text-3xl font-semibold text-center mb-6">Авторизация</h1>

      <form class="space-y-4">
        <div>
          <label class="block text-sm mb-1">Логин</label>
          <input type="text" class="w-full h-11 rounded-xl bg-zinc-800 border border-zinc-700 px-3 focus:ring-2 ring-[--color-accent] outline-none" />
        </div>
        <div>
          <label class="block text-sm mb-1">Пароль</label>
          <input type="password" class="w-full h-11 rounded-xl bg-zinc-800 border border-zinc-700 px-3 focus:ring-2 ring-[--color-accent] outline-none" />
        </div>
        <button type="button" class="w-full h-11 rounded-xl bg-[--color-accent] text-white font-medium">
          Вход
        </button>
        <p class="text-center text-sm text-zinc-400">
          Нет аккаунта?
          <a class="text-[--color-accent] hover:underline" href="#">Зарегистрироваться</a>
        </p>
      </form>
    </div>
  </section>
</template>
