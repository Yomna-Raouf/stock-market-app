/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare global {
  namespace Cypress {
    interface Chainable {
      dataQa: typeof dataQa;
      stubRequest: typeof stubRequest;
    }
  }
}

/**
 * @name dataQa
 * @description Custom command to select DOM element by data-qa attribute.
 * @example cy.dataQa('greeting')
 * @param {String} input: value for the searched item
 */
export const dataQa = (
  input: string,
  options: Record<string, unknown> = {},
): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(`[data-qa=${input}]`, options);
};

Cypress.Commands.add('dataQa', dataQa);

export enum RequestType {
  POST = 'POST',
  GET = 'GET',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

type InterceptorConfig = {
  statusCode?: number;
  forceNetworkError?: boolean;
  delay?: number;
  fixture?: string;
};

type StubRequest<ModifiedData> = {
  type: RequestType;
  url: RegExp;
  fixture: string;
  modifiedData: ModifiedData | null;
  config: InterceptorConfig;
  alias: string;
};

/**
 * @name stubRequest
 * @description Custom command to stub requests and handle modifying data
 * @example cy.stubRequest(options)
 * @param {StubRequest} options: configuration options for the request
 */
export function stubRequest<ModifiedData>({
  type,
  url,
  fixture,
  modifiedData = null,
  config,
  alias,
}: StubRequest<ModifiedData>): Cypress.Chainable {
  return cy.fixture(fixture).then((data) => {
    if (modifiedData && Object.keys(modifiedData).length) {
      Object.keys(modifiedData).forEach((key) => {
        data[key] = modifiedData[key as keyof ModifiedData];
      });
    }

    cy.intercept(type, url, (req) => {
      req.reply({
        body: data,
        ...config,
      });
    }).as(alias);
  });
}

Cypress.Commands.add('stubRequest', stubRequest);
