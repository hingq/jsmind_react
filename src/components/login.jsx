import { useEffect, useRef } from "react";
import "../assets/login.css";
import axios from "axios";
import { useNavigate, useRoutes } from "react-router-dom";
import { addToken } from "../store/login";
import { useSelector, useDispatch } from "react-redux";
function Login() {
  const user = useRef(null);
  const password = useRef(null);
  const route = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    var placeholders = document.querySelectorAll(
        ".styled_input_placeholder_text"
      ),
      inputs = document.querySelectorAll(".styled_input_input");

    placeholders.forEach(function (el, i) {
      var value = el.innerText,
        html = "";
      for (
        var _iterator = value,
          _isArray = Array.isArray(_iterator),
          _i = 0,
          _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
        ;

      ) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var w = _ref;

        if (!value) value = "&nbsp;";
        html += '<span class="letter">' + w + "</span>";
      }
      el.innerHTML = html;
    });

    inputs.forEach(function (el) {
      var parent = el.parentNode;
      el.addEventListener(
        "focus",
        function () {
          parent.classList.add("filled");
          placeholderAnimationIn(parent, true);
        },
        false
      );
      el.addEventListener(
        "blur",
        function () {
          if (el.value.length) return;
          parent.classList.remove("filled");
          placeholderAnimationIn(parent, false);
        },
        false
      );
    });

    function placeholderAnimationIn(parent, action) {
      var act = action ? "add" : "remove";
      var letters = parent.querySelectorAll(".letter");
      letters = [].slice.call(letters, 0);
      if (!action) letters = letters.reverse();
      letters.forEach(function (el, i) {
        setTimeout(function () {
          var contains = parent.classList.contains("filled");
          if ((action && !contains) || (!action && contains)) return;
          el.classList[act]("active");
        }, 50 * i);
      });
    }
    setTimeout(function () {
      document.body.classList.add("on_start");
    }, 100);

    setTimeout(function () {
      document.body.classList.add("document_loaded");
    }, 1800);
  }, []);
  const btnFunction = () => {
    const request = {
      username: user.current.value,
      password: password.current.value,
    };
    console.log(user.current.value);

    axios.post("http://127.0.0.1:5000/login", request).then((res) => {
      dispatch(addToken(res.data));
      setTimeout(() => {
        route("/poem");
      }, 100);
    });
  };
  return (
    <>
      <div className="login_con">
        <form class="form">
          <div class="form_cover"></div>
          <div class="form_loader">
            <div class="spinner active">
              <svg class="spinner_circular" viewBox="25 25 50 50">
                <circle
                  class="spinner_path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                ></circle>
              </svg>
            </div>
          </div>
          <div class="form_content">
            <h1>Authorization</h1>
            <div class="styled_input">
              <input
                type="text"
                class="styled_input_input"
                name="nickname"
                autoComplete="off"
                ref={user}
              />
              <div class="styled_input_placeholder">
                <span class="styled_input_placeholder_text">Username</span>
              </div>
              <div class="styled_input_circle"></div>
            </div>
            <div class="styled_input">
              <input type="text" class="styled_input_input" ref={password} />
              <div class="styled_input_placeholder">
                <span class="styled_input_placeholder_text">Password</span>
              </div>
              <div class="styled_input_circle"></div>
            </div>
            <button type="button" class="styled_button" onClick={btnFunction}>
              <span class="styled_button_real_text_holder">
                <span class="styled_button_real_text">登录</span>
                <span class="styled_button_moving_block face">
                  <span class="styled_button_text_holder">
                    <span class="styled_button_text">登录</span>
                  </span>
                </span>
                <span class="styled_button_moving_block back">
                  <span class="styled_button_text_holder">
                    <span class="styled_button_text">登录</span>
                  </span>
                </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
