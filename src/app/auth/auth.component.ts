import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.direcitve";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {

  isLogginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnDestroy() {
    if (this.closeSub) this.closeSub.unsubscribe();
  }

  onSwitchMode() {
    this.isLogginMode = !this.isLogginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = !this.isLoading;

    if (this.isLogginMode) {
      authObs=this.authService.login(email, password);
    }
    else {
      authObs = this.authService.singUp(email, password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['./recipes']);
    },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {

    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;

    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;

    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
