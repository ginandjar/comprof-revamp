module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/locale/LocaleSolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony export (immutable) */ __webpack_exports__["a"] = withLocaleService;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dictionary_Uk__ = __webpack_require__("./components/locale/dictionary/Uk.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dictionary_Id__ = __webpack_require__("./components/locale/dictionary/Id.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_cookie__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Cookies = __webpack_require__("universal-cookie");



var LocaleSolver = function LocaleSolver(locale) {
  _classCallCheck(this, LocaleSolver);

  this.locale = locale;

  if (this.locale === 'uk') {
    this.dictionary = __WEBPACK_IMPORTED_MODULE_1__dictionary_Uk__["a" /* default */];
  } else {
    this.dictionary = __WEBPACK_IMPORTED_MODULE_2__dictionary_Id__["a" /* default */];
  }
};


function withLocaleService(builder) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(LocaleServiceProvider, _React$Component);

      function LocaleServiceProvider() {
        _classCallCheck(this, LocaleServiceProvider);

        return _possibleConstructorReturn(this, (LocaleServiceProvider.__proto__ || Object.getPrototypeOf(LocaleServiceProvider)).apply(this, arguments));
      }

      _createClass(LocaleServiceProvider, [{
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](builder, _objectSpread({}, this.props));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
            var composedInitialProps, parser, cookie, _cookie;

            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!builder.getInitialProps) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return builder.getInitialProps(props);

                  case 3:
                    _context.t0 = _context.sent;
                    _context.next = 7;
                    break;

                  case 6:
                    _context.t0 = {};

                  case 7:
                    composedInitialProps = _context.t0;

                    if (!(typeof props.req !== 'undefined')) {
                      _context.next = 14;
                      break;
                    }

                    parser = new Cookies(props.req.headers.cookie);
                    cookie = parser.get('locale');
                    return _context.abrupt("return", _objectSpread({}, composedInitialProps, {
                      localeService: new LocaleSolver(cookie)
                    }));

                  case 14:
                    _cookie = __WEBPACK_IMPORTED_MODULE_4_js_cookie__["get"]('locale') || 'id';
                    return _context.abrupt("return", _objectSpread({}, composedInitialProps, {
                      localeService: new LocaleSolver(_cookie)
                    }));

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return LocaleServiceProvider;
    }(__WEBPACK_IMPORTED_MODULE_3_react__["Component"])
  );
}

/***/ }),

/***/ "./components/locale/dictionary/Id.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var Id = {
  meta: {
    home: {
      title: 'Kata.ai |  Artificial Intelligence - Chatbot Indonesia',
      description: 'Kata.ai menyediakan layanan untuk menghubungkan brand & konsumen Anda di messaging platform terpopuler dengan bantuan chatbot berbahasa Indonesia.'
    },
    enterprise: {
      title: 'Kata.ai | Solusi Chatbot untuk Bisnis',
      description: 'Menangkan persaingan bisnis dengan solusi chatbot untuk perusahaan segala industri.'
    },
    platform: {
      title: 'Kata.ai | Buat Chatbot Gratis dengan Kata Platform',
      description: 'Platform terbaik untuk mendesain, melatih, dan mengelola chatbot di messaging platform terpopuler. Ciptakan chatbot Anda sekarang!'
    },
    study: {
      title: 'Studi Kasus Chatbot | Kata.ai',
      description: 'Pelajari bagaimana Kata.ai membantu perusahaan di berbagai industri dengan bantuan chatbot.'
    },
    docs: {
      title: 'Documentations | Kata.ai',
      description: 'Pelajari lebih lanjut tentang penggunaan Kata Platform'
    },
    contact: {
      title: 'Hubungi Kami | Kata.ai',
      description: 'Hubungi kami untuk informasi lebih lanjut tentang Kata.ai'
    },
    pricing: {
      title: 'Kata.ai | Harga Transparan',
      description: 'Mulai dari Rp50.000/10.000 pesan, hubungi kami untuk harga khusus Enterprise'
    }
  },
  common: {
    readMore: 'Baca Selengkapnya'
  },
  nav: {
    home: 'Home',
    products: 'Produk',
    pricings: 'Harga',
    blog: 'Blog',
    resources: 'Sumber Daya',
    contactUs: 'Hubungi Kami',
    enterprise: 'Enterprise Solution',
    enterpriseCompact: 'Enterprise',
    caseStudy: 'Studi Kasus',
    platform: 'Kata Platform',
    documentation: 'Dokumentasi',
    console: 'Buka Console'
  },
  home: {
    hero: {
      title: '#1 Platform Chatbot Indonesia',
      content: 'Ciptakan chatbot cerdas untuk berbagai kebutuhan bisnis, mulai dari layanan konsumen, transaksi jual-beli, hingga kampanye pemasaran interaktif.',
      contentTablet: 'Ciptakan chatbot cerdas untuk berbagai kebutuhan bisnis, mulai dari layanan konsumen, transaksi jual-beli, hingga kampanye pemasaran interaktif.',
      buttonEnterprise: 'Untuk Perusahaan',
      buttonPlatform: 'Untuk Developer'
    },
    subHeroes: {
      sub1: {
        title: 'Membantu Bisnis dengan AI',
        content: 'Kata.ai hadir untuk membantu perusahaan mengintegrasikan teknologi artificial intelligence ke dalam kegiatan bisnis dan usaha, memastikan proses bisnis yang efektif dan efisien dengan bantuan chatbot.'
      },
      sub2: {
        title: 'Enterprise Solution',
        content: 'Menangkan persaingan bisnis dengan solusi chatbot yang siap digunakan untuk perusahaan segala industri.',
        button: 'Telusuri Enterprise Solution'
      },
      sub3: {
        title: 'Kata Platform',
        content: 'Rancang & kelola chatbot dengan platform AI yang mudah digunakan, fleksibel, serta terintegrasi.',
        button: 'Telusuri Kata Platform'
      }
    },
    cases: {
      title: 'Study Kasus',
      case1: {
        company: 'Unilever',
        name: 'Jemma',
        title: 'Menggali Wawasan Mengenai Konsumen Melalui Teman Virtual',
        subTitle: 'Latar Belakang: Unilever Ingin Memahami Pemikiran Konsumen Indonesia Secara Lebih Mendalam',
        content1: 'Untuk tetap dapat bersaing di pasar yang semakin cepat berevolusi, perusahaan raksasa di bidang FMCG ini memiliki visi untuk memahami konsumen Indonesia lebih mendalam melalui platform digital, sembari berupaya memberikan pengalaman menyenangkan dan berkesan agar mereka tetap relevan di hati para konsumen.',
        content2: 'Aplikasi perpesanan seperti LINE telah menjadi prioritas utama bagi Unilever sebagai saluran untuk terhubung dengan konsumen, dan mereka ingin menjadi brand pertama di Indonesia yang memanfaatkan chatbot berbasis AI (kecerdasan buatan) dalam strategi pemasaran mereka.',
        action: 'Chat dengan Jemma'
      },
      case2: {
        company: 'Telkomsel',
        name: 'Veronika',
        title: 'Menghidupkan Persona Legendaris dari Telkomsel Menjadi Asisten Virtual Berbasis Kecerdasan Buatan',
        subTitle: 'Latar Belakang: Perusahaan Telekomunikasi Terbesar Indonesia, Melayani Ratusan Juta Masyarakat di Tanah Air',
        content1: 'Telkomsel adalah operator telekomunikasi seluler terbesar Indonesia, dengan pengalaman melayani lebih dari 120 juta pelanggan selama lebih dari dua dekade. Cepatnya perkembangan teknologi telah mendorong evolusi dari gaya hidup digital para konsumen Telkomsel, hal ini membuat Telkomsel menyadari pentingnya transformasi digital dalam cara mereka terhubung dengan para konsumen.',
        content2: 'Telkomsel ingin mengidentifikasi lebih banyak saluran digital yang bisa memperkaya interaksi dan layanan mereka kepada konsumen, di mana saluran digital ini harus bisa memenuhi dua tujuan strategis: meningkatkan kualitas layanan pelanggan, dan meningkatkan pendapatan dari lebih banyak transaksi.',
        action: 'Chat dengan Veronika'
      }
    },
    featured: 'Diliput Oleh',
    blog: {
      title: 'Ikuti cerita Kata',
      viewAll: 'Lihat Semua'
    }
  },
  footer: {
    product: {
      title: 'Produk',
      platform: 'Kata Platform',
      enterprise: 'Enterprise Solution'
    },
    company: {
      title: 'Perusahaan',
      contact: 'Hubungi Kami',
      careers: 'Karir',
      blog: 'Blog'
    },
    resources: {
      title: 'Sumber Daya',
      documentation: 'Dokumentasi',
      caseStudies: 'Studi Kasus'
    },
    privacy: 'Kebijakan Privasi',
    terms: 'Persetujuan Penggunaan',
    copyright: 'Hak Cipta Dilindungi.'
  },
  enterprise: {
    title: 'Kata.ai Enterprise Solution',
    subTitle: 'Pengalaman percakapan yang memikat, didesain untuk mengembangkan bisnis Anda',
    subTitleTablet: 'Pengalaman percakapan yang memikat, didesain untuk mengembangkan bisnis Anda',
    button: 'Pelajari Enterprise Solution',
    subHeroes: {
      sub1: {
        title: 'Solusi Tuntas',
        content: 'Layanan Enterprise Solution memberikan solusi tuntas untuk perusahaan yang ingin memanfaatkan teknologi chatbot. Tim khusus yang terdiri dari developer, product manager, serta conversational designer akan membantu Anda mewujudkan chatbot yang sesuai dengan kebutuhan perusahaan.'
      },
      sub2: {
        title: 'Dukungan Setiap Saat',
        content: 'Mulai dari penambahan fitur, kampanye pemasaran, hingga diskusi mengenai optimasi chatbot, Kata.ai senantiasa hadir untuk memastikan kesuksesan proyek Anda.'
      }
    },
    media: {
      title: 'Chatbot Cerdas, Tanpa Batas',
      subTitle: 'Dilengkapi dengan teknologi Natural Language Processing (NLP), chatbot Anda mampu melakukan apa pun.',
      icons: {
        icon1: {
          title: 'Pemasaran',
          content: 'Rancang kampanye pemasaran yang informatif & menghibur untuk konsumen Anda melalui percakapan di messaging apps.'
        },
        icon2: {
          title: 'Transaksional',
          content: 'Ciptakan pengalaman jual-beli yang lebih cepat & menyenangkan di messaging platform yang Anda inginkan.'
        },
        icon3: {
          title: 'Layanan Konsumen',
          content: 'Siap sedia 24/7 untuk melayani & menjawab pertanyaan yang sering diajukan konsumen Anda.'
        }
      }
    },
    cta: {
      title: 'Hubungi Kata.ai untuk meningkatkan customer engagement brand Anda',
      subTitle: 'Kami senang bisa menjadi bagian dari kesuksesan anda',
      button: 'Hubungi Kata.ai'
    }
  },
  platform: {
    hero: {
      title: '',
      subTitle: 'Platform terbaik untuk menciptakan chatbot di semua messaging platform',
      subTitleTablet: 'Platform terbaik untuk menciptakan chatbot di semua messaging platform',
      button: 'Telusuri Kata Platform'
    },
    subHeroes: {
      sub1: {
        title: 'All-in-One Chatbot Platform',
        content: 'Kata Platform menyediakan semua elemen yang dibutuhkan untuk menciptakan chatbot dalam satu platform yang terintegrasi. Sistem Kata Platform memungkinkan Anda untuk mendesain, melatih, serta mengelola chatbot tanpa hambatan.'
      },
      sub2: {
        title: 'Smart Deployment Manager',
        content: 'Fitur Smart Deployment Manager memudahkan chatbot Anda untuk terhubung secara instan ke messaging platform yang Anda inginkan, sekaligus memastikan hanya chatbot berkualitas tinggi yang tersaji ke pengguna Anda.'
      },
      sub3: {
        title: 'NL Studio',
        content: 'Latih chatbot Anda untuk memahami maksud dan konteks sebuah percakapan. NL Studio memungkinkan Anda untuk melatih chatbot dua kali lebih cepat dengan dataset yang lebih sedikit. Memanfaatkan teknologi Natural Language Processing (NLP) untuk chatbot Anda kini lebih mudah.'
      },
      sub4: {
        title: 'Bot Studio',
        content: 'Percepat proses pengembangan chatbot Anda dengan berkolaborasi. Dengan Bot Studio, Anda bisa dengan mudah membuat desain percakapan dengan fitur “drag & drop”. Di waktu yang sama, developer bisa melakukan pemrograman menggunakan sistem berbasis YAML. '
      },
      sub5: {
        title: 'Powerful Analytic Dashboard',
        content: 'Pantau performa chatbot Anda dan kumpulkan informasi yang Anda butuhkan. Dashboard Kata Platform telah dilengkapi dengan metrik performa chatbot yang tersaji dalam bentuk grafik. '
      }
    },
    media: {
      title: 'Didesain untuk Developers',
      subTitle: 'Dilengkapi dengan teknologi Natural Language Processing, chatbot anda bisa melakukan apa saja.',
      icons: {
        icon1: 'NL Studio',
        icon2: 'Bot Studio',
        icon3: 'Channel Management',
        icon4: 'Community Support',
        icon5: 'Analytic Dashboard',
        icon6: 'Extensive Documentation'
      }
    },
    cta: {
      title: 'Siap membuat chatbot pertama Anda?',
      subTitle: 'Mulai gratis dan upgrade sesuai kebutuhan',
      button: 'Go to Console'
    }
  },
  pricing: {
    hero: {
      title: 'Harga',
      subTitle: 'Temukan skema harga yang tepat untuk bisnis Anda',
      subTitleTablet: 'Temukan skema harga yang tepat untuk bisnis Anda'
    },
    left: {
      title: 'Kata Platform untuk Developers',
      subTitle: 'Ciptakan chatbot cerdas dengan platform Artificial Intelligence terbaik.',
      priceTitle: 'Rp50K untuk 10K pesan',
      priceSubTitle: 'Coba gratis. Ubah skema harga kapan saja.',
      button: 'Try Now',
      list: ['Unlimited Users', 'Unlimited Chatbots', 'Unlimited Push Channels', 'Free Integration to Messenger Apps', 'Full Access to Kata CLI', 'Full Access to Bot Studio', 'Full Access to NL Studio', 'Analytics Dashboard', 'Community Support']
    },
    right: {
      title: 'Kata.ai Enterprise Solution',
      subTitle: 'Solusi Chatbot untuk Bisnis & Korporasi',
      priceTitle: 'Hubungi Kami',
      priceSubTitle: 'Kami senang menjadi bagian dari kesuksesan anda.',
      button: 'Hubungi Kami',
      litsTitle: 'Semua fitur dari <strong>Kata | Platform</strong>, plus:',
      list: ['Content Management System', 'Customised Analytics', 'Marketing Dashboard', 'Agent Handover', 'Managed Services', 'Bot Design & Persona Consultation', 'Expert Support with Enterprise-Grade SLAs']
    },
    partnerTitle: 'Dipercaya Perusahaan Multinasional'
  },
  documentation: {
    title: 'Dokumentasi',
    subTitle: 'Dokumentasi Kata.ai',
    subTitleTablet: 'Dokumentasi Kata.ai'
  },
  caseStudy: {
    hero: {
      title: 'Studi Kasus Chatbot',
      subTitle: 'Pelajari bagaimana chatbot membantu perusahaan mencapai tujuan bisnisnya',
      subTitleTablet: 'Pelajari bagaimana chatbot membantu perusahaan mencapai tujuan bisnisnya'
    },
    jemma: {
      title: 'Jemma: Menggali Wawasan Mengenai Konsumen Melalui Teman Virtual',
      subTitle: 'Latar Belakang: Unilever Ingin Memahami Pemikiran Konsumen Indonesia Secara Lebih Mendalam',
      p1: 'Untuk tetap dapat bersaing di pasar yang semakin cepat berevolusi, perusahaan raksasa di bidang FMCG ini memiliki visi untuk memahami konsumen Indonesia lebih mendalam melalui platform digital, sembari berupaya memberikan pengalaman menyenangkan dan berkesan agar mereka tetap relevan di hati para konsumen.',
      p2: 'Aplikasi perpesanan seperti LINE telah menjadi prioritas utama bagi Unilever sebagai saluran untuk terhubung dengan konsumen, dan mereka ingin menjadi brand pertama di Indonesia yang memanfaatkan chatbot berbasis AI (kecerdasan buatan) dalam strategi pemasaran mereka.',
      sub1: 'Yang Kami Pelajari:',
      sub2: 'Kami menemukan beberapa tantangan yang harus dihadapi untuk menyukseskan visi Unilever. Di antaranya:',
      p3: 'Unilever sebagai brand perusahaan belum memiliki persona yang kuat dan dikenal oleh masyarakat. Hal ini menunjukkan bahwa sebuah persona baru harus diciptakan untuk menarik perhatian jutaan konsumen Indonesia.',
      p4: 'Dalam pembelian barang - barang kebutuhan konsumen, wanita memiliki peran penting dalam pengambilan keputusan di setiap rumah tangga. Karena itu, persona chatbot yang diciptakan harus dapat menjadi relevan bagi audiens wanita.',
      p5: 'Saluran yang paling sesuai untuk strategi ini adalah LINE Messenger. Line merupakan salah satu aplikasi perpesanan yang paling populer di Indonesia dan memliki basis pengguna besar dalam demografi konsumen yang ditargetkan oleh Unilever.',
      sub3: 'Solusi Kami: Jemma, Sahabat Virtualmu',
      p6: 'Kami menyarankan dibuatnya persona chatbot wanita yang dapat terhubung akrab dengan audiens utama Unilever, seorang sahabat terpercaya yang cerdas dan jenaka. Dirancang untuk menghibur dan membangun persahabatan melalui obrolan santai.',
      p7: 'Kami menamai chatbot ini "Jemma"; chatbot dengan kepribadian ceria yang seru dan asyik diajak mengobrol. Jemma memiliki kemampuan menjawab berbagai topik perbincangan, mulai dari sapaan sederhana, hingga topik obrolan yang spesifik seperti hubungan dan asmara, rekomendasi makanan, dan budaya populer Indonesia.',
      sub4: 'Penuhi Janji Sebagai Sahabat',
      p8: 'Selain menjawab obrolan sehari - hari, fitur utama yang ditawarkan Jemma adalah zodiak, tips dan trik kehidupan sehari - hari, dan berita hiburan. Seiring bertambahnya jumlah pengguna Jemma secara eksponensial dalam tiga bulan pertama, kami menyadari banyaknya pengguna yang mulai merasa terhubung dengan Jemma, di mana beberapa bahkan merasa cukup nyaman membahas cita-cita maupun masalah pribadi mereka dengan Jemma. Melihat hal tersebut, kami menambahkan sebuah fitur di mana para pengguna bisa berbagi mimpi dan pemikirian mereka kepada Jemma. Sebagai sahabat baik, Jemma akan mendengarkan dengan setia dan memberikan ucapan - ucapan yang mendukung kepada pengguna.',
      p9: 'Walaupun sejak awal sudah jelas bahwa Jemma hanyalah sebuah chatbot, pengguna tetap senang berbicara dengan Jemma karena hal ini terasa seperti berbicara dengan seorang yang nyata; seorang sahabat baik.',
      sub5: 'Dampak Yang Dicapai:',
      p10: 'Jemma memiliki efektivitas yang tinggi sebagain salah satu saluran pemasaran digital untuk produk dan promosi Unilever.',
      p11: 'Dalam waktu kurang dari satu tahun, Jemma berhasil menghimpun lebih dari 1,5 Juta sahabat, yang mengirimkan lebih dari 50 Juta pesan dalam 17 Juta sesi percakapan. Pada bulan Oktober 2017, Jemma memenangkan penghargaan “The Most Interactive Brand Chatbot” dari LINE.',
      p12: 'Melalui Jemma, Unilever dapat mengungkap wawasan mendalam mengenai konsumen dan memanfaatkan peluang pemasaran yang terpersonalisasi untuk audiens yang masif. Dengan dukungan Platform dan Enterprise Solution dari Kata.ai, perusahaan - perusahaan dengan tantangan serupa dapat bereksperimen dengan solusi chatbot.',
      p13: 'Siapkah brand anda untuk mengimplementasikan branding chatbot dalam strategi pemasaran anda?'
    },
    veronika: {
      title: 'Menghidupkan Persona Legendaris dari Telkomsel Menjadi Asisten Virtual Berbasis Kecerdasan Buatan',
      subTitle: 'Latar Belakang: Perusahaan Telekomunikasi Terbesar Indonesia, Melayani Ratusan Juta Masyarakat di Tanah Air',
      p1: 'Telkomsel adalah operator telekomunikasi seluler terbesar Indonesia, dengan pengalaman melayani lebih dari 120 juta pelanggan selama lebih dari dua dekade. Cepatnya perkembangan teknologi telah mendorong evolusi dari gaya hidup digital para konsumen Telkomsel, hal ini membuat Telkomsel menyadari pentingnya transformasi digital dalam cara mereka terhubung dengan para konsumen.',
      p2: 'Telkomsel ingin mengidentifikasi lebih banyak saluran digital yang bisa memperkaya interaksi dan layanan mereka kepada konsumen, di mana saluran digital ini harus bisa memenuhi dua tujuan strategis: meningkatkan kualitas layanan pelanggan, dan meningkatkan pendapatan dari lebih banyak transaksi.',
      sub1: 'Yang kami temukan: Jejak yang kuat di media digital, dan Persona yang dekat di hati konsumen',
      sub2: 'Sebagai pemimpin pasar, ada beberapa hal yang sudah dimiliki oleh Telkomsel, yang akan memudahkan mereka dalam mengembangkan kanal digital baru.',
      p3: 'Mereka sudah memiliki jutaan audiens di berbagai media sosial dan platform digital lainnya, menghadirkan banyak peluang dan khalayak untuk mengembangkan inisiatif baru.',
      p4: 'Meski demikian, masih ada beberapa fitur dari platform atau media - media ini yang belum dicoba oleh Telkomsel. Ini berarti ada banyak strategi baru yang bisa segera diimplementasikan untuk terhubung lebih baik dengan konsumen.',
      p5: "Sejak tahun '90an, Telkomsel memiliki Veronika - persona merek yang sangat dekat di hati konsumen, yang mereka gunakan sebagai nama layanan pesan suara. Persona ini bisa kembali dihidupkan sebagai wajah digital baru bagi Telkomsel.",
      sub3: 'Solusi Kami: Veronika sang Asisten Virtual',
      p6: 'Kami menyarankan Telkomsel untuk mengembangkan chatbot omni-channel yang berfungsi untuk membantu kebutuhan para pelanggan Telkomsel. Omni-channel sendiri artinya asisten virtual ini dapat diakses melalui berbagai saluran digital, termasuk LINE dan Facebook Messenger.',
      p7: 'Chatbot ini dinamai Veronika, untuk menghadirkan identitas yang sudah akrab bagi para konsumen. Untuk menjamin kualitas dan konsistensi layanan yang tinggi, chatbot ini juga dilengkapi dengan fasilitas "handover" atau pemindahan pelayanan ke agen layanan pelanggan yang bisa mengambil alih percakapan saat keluhan atau pertanyaan pelanggan sudah terlalu kompleks untuk ditangani oleh chatbot.',
      sub4: 'Bagaimana Veronika Bisa Membantu Anda?',
      p8: 'Sebagai asisten yang memiliki fungsionalitas tinggi, Veronika bisa memberikan akses terhadap informasi produk, promosi terbaru, layanan pelanggan, dan memfasilitasi berbagai transaksi seperti pembelian pulsa, paket data, maupun pembayaran tagihan pascabayar.',
      p9: 'Tidak hanya itu, Veronika juga bisa membantu pelanggan mencari lokasi GraPARI terdekat (pusat layanan pelanggan Telkomsel), dan mengatur janji untuk bertemu dengan agen layanan pelanggan di GraPARI.',
      p10: 'Semua layanan ini dapat diakses melalui percakapan dan pertanyaan yang santai dan natural, di mana pelanggan bisa berbicara dengan chatbot seakan - akan mereka sedang berbicara dengan manusia. Tidak perlu menggunakan kata - kata kunci untuk mengakses fungsi atau layanan tertentu',
      sub5: 'Apa Dampak Yang Dihasilkan?',
      p11: 'Setelah meluncurkan Veronika, Telkomsel menemukan beberapa perkembangan yang bisa mendorong peningkatan kualitas dalam proses bisnis mereka:',
      p12: '96% dari pertanyaan pelanggan bisa ditangani oleh chatbot dengan interaksi manusia yang minimal, memungkinkan solusi yang cepat dan efisien terhadap kebutuhan konsumen.',
      p13: 'Chatbot ini juga memberi cara yang lebih mudah untuk menyampaikan informasi penting kepada konsumen.',
      p14: 'Sebagai sebuah strategi, chatbot ini bisa dikembangkan sebagai proyek jangka panjang di mana akan semakin banyak cara baru yang bisa dimanfaatkan untuk memperkaya proses interaksi dengan konsumen.',
      p15: 'Dengan meluncurkan Veronika, kami telah menemukan nilai yang bisa ditawarkan oleh chatbot untuk meningkatkan efisiensi dalam proses bisnis perusahaan telekomunikasi. Melihat manfaat nyata dari hal ini, solusi yang sama tentu bisa dimanfaatkan oleh perusahaan perusahaan lain yang memiliki tantangan serupa. Dengan fleksibilitas platform dan Enterprise Solution milik Kata.ai, lebih banyak perusahaan dapat menemukan nilai yang sama dari memanfaatkan chatbot sebagai salah satu bagian penting strategi mereka.'
    },
    cta: {
      title: 'Siap memanfaatkan chatbot untuk bisnis Anda?',
      subTitle: 'Cari tahu bagaimana chatbot bisa membantu perusahaan anda',
      button: 'Hubungi Kata.ai'
    }
  },
  contact: {
    hero: {
      title: 'Hubungi Kata.ai',
      subTitle: 'Hubungi sales untuk menjadwalkan demo'
    },
    box: {
      title: 'Kirim Pesan untuk Kami',
      required: 'Semua data harus diisi',
      form: {
        name: 'Nama Anda',
        company: 'Perusahaan Anda',
        email: 'Email Anda',
        businessType: 'Tipe Bisnis Anda',
        phone: 'Nomor Ponsel Anda',
        detail: 'Pesan Anda',
        button: 'Kirim Sekarang'
      },
      error: {
        name: 'Nama Anda harus diisi',
        company: 'Perusahaan Anda harus diisi',
        email: 'Email anda harus diisi',
        businessType: 'Tipe Bisnis Anda harus diisi',
        phone: 'Nomor Ponsel Anda harus diisi',
        detail: 'Pesan Anda harus diisi'
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Id);

/***/ }),

/***/ "./components/locale/dictionary/Uk.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var Uk = {
  meta: {
    home: {
      title: 'Kata.ai |  Artificial Intelligence - Chatbot Indonesia',
      description: 'Kata.ai provides services to connect your brand & consumer on a popular messaging platform with the help of Indonesian chatbot'
    },
    enterprise: {
      title: 'Kata.ai | Chatbot Solution for Business',
      description: 'Win business competition with chatbot solution for any industry'
    },
    platform: {
      title: 'Kata.ai | Create Free Chatbot with Kata Platform',
      description: 'Best platform to design, train, and manage your chatbot on popular messaging platforms. Create your own chatbot now!'
    },
    study: {
      title: 'Case Study | Kata.ai',
      description: 'Learn how Kata.ai helps business in any industry with the power of chatbot'
    },
    docs: {
      title: 'Documentations | Kata.ai',
      description: 'Learn more about Kata.ai platform'
    },
    contact: {
      title: 'Contact Us | Kata.ai',
      description: 'Contact us to learn more about Kata.ai'
    },
    pricing: {
      title: 'Kata.ai | Transparent Pricing',
      description: 'Starts from Rp50.000/10.000 messages, contact us for specialized Enterprise pricing'
    }
  },
  common: {
    readMore: 'Read More'
  },
  nav: {
    home: 'Home',
    products: 'Products',
    pricings: 'Pricing',
    blog: 'Blog',
    resources: 'Resources',
    contactUs: 'Contact Us',
    caseStudy: 'Case Study',
    enterprise: 'Enterprise Solution',
    enterpriseCompact: 'Enterprise',
    platform: 'Kata Platform',
    documentation: 'Documentation',
    console: 'Go To Console'
  },
  home: {
    hero: {
      title: 'Powerful Conversational AI Platform',
      content: 'Build engaging interactions to connect with your consumers and power your business. #1 AI Chatbot Platform in Indonesia and Southeast Asia.',
      contentTablet: "Create an engaging interaction where you can understand your consumer needs and leveraging it into clear business goals, whether it's better sales, superior customer service, or effective marketing campaigns. #1 AI Chatbot Platform in Indonesia and Southeast Asia.",
      buttonEnterprise: 'For Enterprise',
      buttonPlatform: 'For Developers'
    },
    subHeroes: {
      sub1: {
        title: 'Empowering Business Through AI',
        content: 'Kata.ai aspires to unlock the power of artificial intelligence for companies of all sizes, where our highly intelligent conversational interface can empower their mission.'
      },
      sub2: {
        title: 'Enterprise Solution',
        content: 'Achieve business goals faster with fully customizable, enterprise-grade chatbot solution.',
        button: 'Explore Enterprise Solution'
      },
      sub3: {
        title: 'Kata Platform',
        content: 'Start building smarter chatbot with the most powerful conversational AI platform.',
        button: 'Explore Kata Platform'
      }
    },
    cases: {
      title: 'Case Studies',
      case1: {
        company: 'Unilever',
        name: 'Jemma',
        title: 'Jemma: Capturing Consumer Insights Through Virtual Friend',
        subTitle: 'The Background: Unilever Seeks Way to Delve Deeper into The Minds of Indonesian Consumers',
        content1: 'To remain competitive in the ever-evolving market, the FMCG giant has a vision to understand Indonesian audience better through digital platform, while at the same time deliver an engaging experience to their target audience on a deeper level and display their relevance.',
        content2: "Messaging applications have become Unilever's top priority to reach consumers, and they want to be the first in Indonesia to utilize AI-powered chatbot into their marketing strategies.",
        action: 'Chat with Jemma'
      },
      case2: {
        company: 'Telkomsel',
        name: 'Veronika',
        title: "Reviving Telkomsel's Legendary Brand Persona as an AI-Powered Intelligent Assistant",
        subTitle: "The Background: Indonesia's Top Telco with Half of Indonesia's Population as their User Base",
        content1: "Telkomsel is Indonesia's largest cellular operator with 2 decades of history in providing cellular service to more than 120 Million subscribers (that’s almost half of Indonesia’s population). As the development of technology pushed the evolution of consumer’s digital habits, the company is seeking to pursue more digital transformation in the way they connect with consumers.",
        content2: 'They seek to identify more digital channels that can enrich their engagement and service delivery to the consumers, and these new digital channel need to be able to fulfill two main goals: Improving customer service and driving revenue from more transactions.',
        action: 'Chat with Veronika'
      }
    },
    featured: 'As Featured In',
    blog: {
      title: 'Keep up with Kata insights',
      viewAll: 'View All'
    }
  },
  footer: {
    product: {
      title: 'Products',
      platform: 'Kata Platform',
      enterprise: 'Enterprise Solution'
    },
    company: {
      title: 'Company',
      contact: 'Contact Us',
      careers: 'Careers',
      blog: 'Blog'
    },
    resources: {
      title: 'Resources',
      documentation: 'Documentation',
      caseStudies: 'Case Studies'
    },
    privacy: 'Privacy Policy',
    terms: 'Terms of Services',
    copyright: 'All rights reserved.'
  },
  enterprise: {
    title: 'Kata.ai Enterprise Solution',
    subTitle: 'Remarkable conversational experience for your customers, tailor-made to power your business growth.',
    subTitleTablet: 'Remarkable conversational experience for your customers, tailor-made to power your business growth.',
    button: 'Enterprise Solution',
    subHeroes: {
      sub1: {
        title: 'Effortless Chatbot Development',
        content: 'Harness the power of chatbot without the heavy lifting. Dedicated team of world class engineers, product managers, and conversational designers will cover full cycle development to bring your chatbot to life.'
      },
      sub2: {
        title: 'Continuous Support',
        content: "Whether you're having additional features, planning on retention campaign, or simply need to discuss about chatbot best practices, have a peace of mind that we will always be there every step of the way."
      }
    },
    media: {
      title: 'Designed for Enterprises',
      subTitle: 'Suited with Natural Language Processing (NLP) technology, your chatbot is capable of doing just about anything.',
      icons: {
        icon1: {
          title: 'Branding & Marketing',
          content: 'Entertain and educate your customers with interactive and engaging campaigns through chat.'
        },
        icon2: {
          title: 'Transactional',
          content: 'Let your customers browse and buy your products or services through frictionless messaging experience.'
        },
        icon3: {
          title: 'Customer Support',
          content: 'Answer frequently asked questions and provide instant 24/7 assistance for your customers.'
        }
      }
    },
    cta: {
      title: 'Start befriending your customers and build strong relationships with them',
      subTitle: 'We would love to be part of your success',
      button: 'Get in Touch'
    }
  },
  platform: {
    hero: {
      title: '',
      subTitle: 'The ultimate platform to create chatbot on any messaging platform.',
      subTitleTablet: 'The ultimate platform to create chatbot on any messaging platform.',
      button: 'Explore Kata Platform'
    },
    subHeroes: {
      sub1: {
        title: 'All-in-One Chatbot Platform',
        content: 'Kata Platform brings together all of the elements to create intelligent chatbot in a single, integrated platform. Built with scalability in mind, its engine allows you to design, train, and manage chatbot without compromise.'
      },
      sub2: {
        title: 'Smart Deployment Manager',
        content: 'Easily adapt to your consumer ever-changing messaging behaviour. Our channel management system allows you to instantly connect to popular messaging channels while ensuring only high quality and robust bots are delivered to your users.'
      },
      sub3: {
        title: 'NL Studio',
        content: 'Train your chatbot to understand the meaning and intention behind what your customers are saying. NL Studio enables you to train chatbot twice as smart with just half the datasets. NL Studio now support Bahasa Indonesia. Injecting Natural Language Processing (NLP) technology to your chatbot is now a breeze.'
      },
      sub4: {
        title: 'Bot Studio',
        content: 'Speed up your development process by collaborating. Bot Studio allows conversational designers to drag and drop their way to create conversation flow while developers write codes in YAML based markup language. Developing a chatbot has never been this seamless.'
      },
      sub5: {
        title: 'Powerful Analytic Dashboard',
        content: 'Monitor how your chatbot performs and constantly adapt to user behaviour. The dashboard comes preloaded with key chatbot metrics to help you gather actionable insights.'
      }
    },
    media: {
      title: 'Designed for Enterprises',
      subTitle: 'Suited with Natural Language Processing (NLP) technology, your chatbot is capable of doing just about anything.',
      icons: {
        icon1: 'NL Studio',
        icon2: 'Bot Studio',
        icon3: 'Channel Management',
        icon4: 'Community Support',
        icon5: 'Analytic Dashboard',
        icon6: 'Extensive Documentation'
      }
    },
    cta: {
      title: 'Ready to create your first chatbot?',
      subTitle: 'Start free and scale as you grow',
      button: 'Go to Console'
    }
  },
  pricing: {
    hero: {
      title: 'Pricing',
      subTitle: 'Find the perfect plan for your business.',
      subTitleTablet: 'Find the perfect plan for your business.'
    },
    left: {
      title: 'Kata Platform for Developers',
      subTitle: 'Build intelligent chatbot with the most powerful conversational AI platform',
      priceTitle: 'Rp50K for 10K messages',
      priceSubTitle: 'Scale up or scale down anytime.',
      button: 'Try Now',
      list: ['Unlimited Users', 'Unlimited Chatbots', 'Unlimited Push Channels', 'Free Integration to Messenger Apps', 'Full Access to Kata CLI', 'Full Access to Bot Studio', 'Full Access to NL Studio', 'Analytics Dashboard', 'Community Support']
    },
    right: {
      title: 'Kata.ai Enterprise Solution',
      subTitle: 'Effortless chatbot development for enterprise',
      priceTitle: "Let's Talk",
      priceSubTitle: 'We would love to be part of your success',
      button: 'Contact Us',
      litsTitle: 'All features from <strong>Kata | Platform</strong>, plus:',
      list: ['Content Management System', 'Customised Analytics', 'Marketing Dashboard', 'Agent Handover', 'Managed Services', 'Bot Design & Persona Consultation', 'Expert Support with Enterprise-Grade SLAs']
    },
    partnerTitle: 'Our Valuable Clients & Trusted Partners'
  },
  documentation: {
    title: 'Docs',
    subTitle: 'Kata.ai Documentation',
    subTitleTablet: 'Kata.ai Documentation'
  },
  caseStudy: {
    hero: {
      title: 'Featured Case Study',
      subTitle: 'Learn how Kata.ai enables industry leaders to reach their business goals faster by utilizing chatbot.',
      subTitleTablet: 'Learn how Kata.ai enables industry leaders to reach their business goals faster by utilizing chatbot.'
    },
    jemma: {
      title: 'Jemma: Capturing Consumer Insights Through Virtual Friend',
      subTitle: 'The Background: Unilever Seeks Way to Delve Deeper into The Minds of Indonesian Consumers',
      p1: 'To remain competitive in the ever-evolving market, the FMCG giant has a vision to understand Indonesian audience better through digital platform, while at the same time deliver an engaging experience to their target audience on a deeper level and display their relevance.',
      p2: "Messaging applications have become Unilever's top priority to reach consumers, and they want to be the first in Indonesia to utilize AI-powered chatbot into their marketing strategies.",
      sub1: 'Our Findings:',
      sub2: 'We have found several issues to tackle in order to make this project a big-time success. Amongst them are:',
      p3: 'Unilever as a corporate brand does not have a strong persona, to begin with. Therefore, a new persona has to be conceived in order to successfully attract millions of Indonesian consumers.',
      p4: "When it comes to consumer goods purchase, the female audience plays a decisive role in a household. For that reason, the idea of chatbot's persona must revolve around this particular audience.",
      p5: "The most appropriate channel for this project is LINE Messenger. It is one of the most popular messaging application in Indonesia and fits really well with Unilever's demographics.",
      sub3: 'Our Solution: Jemma, The Virtual Best Friend',
      p6: 'We proposed a female chatbot persona that is relatable to the key audience, emulating witty and trustworthy best friend. It is designed to entertain and build relationship through everyday conversations.',
      p7: 'We decided to name the chatbot “Jemma”; a chatbot with a bubbly personality that everybody loves to talk to. Jemma is capable of handling various conversation topics, from simple greetings to specific conversation cases such as relationship, food recommendation, and Indonesian pop culture.',
      sub4: 'Living Up to Her Name',
      p8: 'Aside from handling everyday conversations, the key features that Jemma offers are weekly zodiacs, lifehack, and latest entertainment news. As the user base grows exponentially from the first three months, we have found that most users have gotten really attached to Jemma, and some of them even tried to confide their dreams and problems to her. Given the circumstances, we decided to add one dedicated feature where users can specifically tell their concerns and hopes to the chatbot. Jemma, like the best friend she is, will sympathetically listen and give words of encouragement to users.',
      p9: 'While it is clear from the start that Jemma is just a chatbot, somehow users continue to confide to Jemma because apparently, it felt like conversing to a real person; a best friend.',
      sub5: 'The Result:',
      p10: "Jemma is highly effective as one of Unilever's alternative digital marketing channel to promote Unilever's products and events.",
      p11: 'In less than a year after its deployment, Jemma managed to acquire 1,5 million friends, with more than 50 million incoming messages in 17 million sessions. On October 2017, Jemma won “The Most Interactive Brand Chatbot” award by LINE Corporation.',
      p12: 'Through Jemma, Unilever can unlock marketable consumer insights and personalized cross-selling opportunities to a massive audience. With the help of Kata Platform and our enterprise solution, a similar use case can definitely be explored by other brands who want to accomplish the same goal.',
      p13: 'Ready to implement branding chatbot into your marketing strategy?'
    },
    veronika: {
      title: 'Reviving Telkomsel’s Legendary Brand Persona as an AI-Powered Intelligent Assistant',
      subTitle: 'The Background: Indonesia’s Top Telco with Half of Indonesia’s Population as their User Base',
      p1: 'Telkomsel is Indonesia’s largest cellular operator with 2 decades of history in providing cellular service to more than 120 Million subscribers (that’s almost half of Indonesia’s population). As the development of technology pushed the evolution of consumer’s digital habits, the company is seeking to pursue more digital transformation in the way they connect with consumers.',
      p2: 'They seek to identify more digital channels that can enrich their engagement and service delivery to the consumers, and these new digital channel need to be able to fulfill two main goals: Improving customer service and driving revenue from more transactions.',
      sub1: 'Our Findings: Strong Digital Presence and Powerful Persona',
      sub2: 'As a market leader, we found several facts that Telkomsel can readily leverage in creating new digital channels. Amongst them are:',
      p3: 'They already have millions of audience in multiple social media and digital media platforms, providing ample opportunity and audience for new initiatives to connect with their consumers.',
      p4: 'Nevertheless, there are several features that they haven’t explored in those platforms. This means there are new strategies that can be deployed to improve their engagement with the consumers.',
      p5: 'Since the 90’s, Telkomsel has a strong brand persona with the name Veronika which they previously used as the name of their voice messaging service. This persona can be revitalized as a digital face of their company.',
      sub3: 'Our Solution: Veronika The Virtual Assistant',
      p6: 'We proposed creating a scalable omni-channel chatbot as a virtual assistant that can assist all the needs of Telkomsel customers, omni-channel itself means that the virtual assistant can be accessed by the customers through various platforms including Line and Facebook Messenger.',
      p7: 'The chatbot will be named Veronika, to provide a persona and name that is already familiar to the customers, capitalizing on their existing brand strength. To ensure top quality and consistency of service, the chatbot is also equipped with seamless handover to human customer service agents that can take over the conversation when the customer inquiries is too complex to be handled by the chatbot.',
      sub4: 'How Can Veronika Assist You?',
      p8: 'As a comprehensive assistant, Veronika can give the users access to product information, latest promotions, customer service, as well as facilitating various transactions such as buying phone credits, data packages, or bill payment.',
      p9: 'Beyond that, Veronika can help the customers access a location based service to find the nearest GraPARI (Telkomsel’s brick-and-mortar customer service centre), and reserving an appointment for the consumers to meet the customer service agents at GraPARI.',
      p10: 'All of this can be easily accessed through simple conversations and questions, so the customers can talk to the chatbot as if they are talking to a real human instead of having to memorize keywords to access certain services or function.',
      sub5: 'What Is The Impact',
      p11: 'After deploying Veronika in action, Telkomsel discovered several key improvement that can play a role in enhancing their business process:',
      p12: '96% of the customer inquiries can actually be handled by the chatbot with minimal human interaction, offering a more efficient and quicker solution and resolution for the customers needs.',
      p13: 'The chatbot also provides an easier way to update the customers with important information.',
      p14: 'The strategy can be leveraged as a long term project where more improvements and enhancement can be explored to improve customer engagement for Telkomsel.',
      p15: 'In deploying the chatbot, we have discovered the true value that a chatbot can offer in terms of improving the business process of a major telecommunications company. As this use cases have proven benefits, similar solution can clearly be explored for other companies with similar challenges. With the versatility of Kata.AI’s platform and enterprise solution, more companies can unlock the similar value by leveraging chatbots as an integral part of their strategy.'
    },
    cta: {
      title: 'Ready to harness the power of chatbot?',
      subTitle: 'Get to know how chatbot can help your company',
      button: 'Request a Demo'
    }
  },
  contact: {
    hero: {
      title: 'Get in Touch',
      subTitle: 'Contact sales for scheduling demo'
    },
    box: {
      title: 'Send Message to Us',
      required: 'All field is required',
      form: {
        name: 'Your Name',
        company: 'Your Company',
        email: 'Your Email Address',
        businessType: 'Your Business Type',
        phone: 'Your Phone Number',
        detail: 'More details about your problem',
        button: 'Send Now'
      },
      error: {
        name: 'Your name is required',
        company: 'Your company name is required',
        email: 'Your email is required',
        businessType: 'Your business type is required',
        phone: 'Your phone number is required',
        detail: 'Detail is required'
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Uk);

/***/ }),

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_locale_LocaleSolver__ = __webpack_require__("./components/locale/LocaleSolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);



var _jsxFileName = "/Users/adjiginandjar/Documents/personal/kata/workspace/new-kata/kata-ai-next-revamp/pages/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          localeService = _props.localeService,
          posts = _props.posts;
      return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "Hello Next.js \uD83D\uDC4B"), __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "About")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__components_locale_LocaleSolver__["a" /* withLocaleService */])(Home));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "universal-cookie":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map