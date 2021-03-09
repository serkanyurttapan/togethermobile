import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class CookieModule {
  read(name: string) {
    const result = new RegExp(
      "(?:^|; )" + encodeURIComponent(name) + "=([^;]*)"
    ).exec(document.cookie);
    return result ? result[1] : null;
  }

  write(name: string, value: string, minutes?: number) {
    if (!minutes) {
      minutes = 365 * 20 * 1000;
    }

    const date = new Date();
    date.setTime(date.getTime() + minutes * 24 * 60 * 60);

    const expires = "; expires=" + date.toUTCString();

    document.cookie = name + "=" + value + expires + "; path=/";
  }

  remove(name: string) {
    this.write(name, "", -1);
  }
}
