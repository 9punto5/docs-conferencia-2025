import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return "Iv23lievryeDhPZGUfFK";
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return "77b971a810856bf6a3369c4fb3f459991174f234";
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return "3826d1190c028965ac7032f6b47e841dc87d78b8acc937d69ce332a548d2d1c6fb7069f324d9d49d";
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "github",
    repo: {
      owner: "9punto5",
      name: "docs-conferencia-2025"
    }
  } ,
  collections: {
    "planificacion": collection({
      label: "Planificación",
      slugField: "title",
      path: "src/content/docs/planificacion/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "areas-contenidos": collection({
      label: "Áreas - Contenidos",
      slugField: "title",
      path: "src/content/docs/areas/contenidos/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "areas-produccion": collection({
      label: "Áreas - Producción",
      slugField: "title",
      path: "src/content/docs/areas/produccion/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "areas-marketing-diseno": collection({
      label: "Áreas - Marketing y diseño",
      slugField: "title",
      path: "src/content/docs/areas/marketing-diseno/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "areas-tecnologia": collection({
      label: "Áreas - Tecnología y UX",
      slugField: "title",
      path: "src/content/docs/areas/tecnologia/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "areas-finanzas": collection({
      label: "Áreas - Finanzas",
      slugField: "title",
      path: "src/content/docs/areas/finanzas/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "areas-experiencia": collection({
      label: "Áreas - Experiencia",
      slugField: "title",
      path: "src/content/docs/areas/experiencia/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "areas-coordinacion": collection({
      label: "Áreas - Coordinación",
      slugField: "title",
      path: "src/content/docs/areas/coordinacion/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "areas-producto": collection({
      label: "Áreas - Producto",
      slugField: "title",
      path: "src/content/docs/areas/producto/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "eventos": collection({
      label: "Eventos",
      slugField: "title",
      path: "src/content/docs/eventos/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    }),
    "recursos": collection({
      label: "Recursos",
      slugField: "title",
      path: "src/content/docs/recursos/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenido",
          extension: "md"
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
