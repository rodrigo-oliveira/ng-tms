import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { CustomersService } from "../../../core/services/customers.service";
import { customersActions } from "./customers.actions";

export const loadCustomersEffect = createEffect(
  (actions$ = inject(Actions), customersService = inject(CustomersService)) => {
    return actions$
      .pipe(
        ofType(customersActions.loadCustomers),
        tap(() => console.log('Load customers')),
        switchMap(() => customersService.getAll()
          .pipe(
            tap(() => console.log('Load customers sucess')),
            map(customers => customersActions.loadCustomersSuccess({ customers }))
          )
        )
      )
  }, { functional: true }
)