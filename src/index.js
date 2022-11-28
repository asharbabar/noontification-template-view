import React from "react";
import ReactDOM from "react-dom";
import queryString from "query-string";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./styles.css";

import {
  Sidebar,
  Section,
  Heading,
  Description,
  Option,
  Input,
  TextArea,
  Button,
  Switch,
  Preview
} from "./components";

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

// outside of presets
const globalOptions = {
  fontSize: 14,
  highlightLines: null,
  initialPath: "/",
  useCodemirror: false,
  enableEslint: false,
  defaultFile: null,
  showNavigation: false
};

const presets = {
  "split-view": {
    showEditor: true,
    showTabbarSidebar: true,
    showPreview: true,
    showNavigation: false,
    expandDevtools: false,
    showTests: false
  },
  "preview-only": {
    showEditor: false,
    showPreview: true,
    showNavigation: false,
    expandDevtools: false,
    showTests: false
  },
  "code-only": {
    showEditor: true,
    showTabbarSidebar: false,
    showPreview: false
  },
  "code-with-tests": {
    showEditor: true,
    showTabbarSidebar: true,
    showPreview: true,
    showNavigation: false,
    expandDevtools: true,
    showTests: true
  }
};

function App() {
  const [settings, setSettings] = React.useState({
    preset: "split-view",
    ...globalOptions,
    ...presets["split-view"]
  });

  const [darkMode, setDarkMode] = React.useState(true);

  const change = property => {
    setSettings({ ...settings, preset: "custom", ...property });
  };

  const toggle = property => {
    change({ [property]: !settings[property] });
  };

  const applyPreset = name => {
    setSettings({ ...settings, preset: name, ...presets[name] });
  };

  const select = event => {
    event.target.select()
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="modal">
        <Sidebar>
          <Section.Body css={{ paddingBottom: 0 }}>
            <Heading>Template View</Heading>
            <Description>
              Dont complicate shit pls
            </Description>

            <Option>
              Dark theme
              <Switch on={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </Option>
          </Section.Body>

          <Section title="Payload">
            <Option disabled={!settings.showEditor} multiline>
              Name
              <Input type="text" />
            </Option>
            <Option disabled={!settings.showEditor} multiline>
              Refund Amount
              <Input type="text" />
            </Option>
            <Option disabled={!settings.showEditor} multiline>
              Other shit
              <Input type="text" />
            </Option>
          </Section>

          <Section title="Metadata">
            <Option disabled={!settings.showEditor} multiline>
              Subject
              <Input type="text" />
            </Option>
            <Option disabled={!settings.showEditor} multiline>
              From Email
              <Input type="text" />
            </Option>
            <Option disabled={!settings.showEditor} multiline>
              Reply To
              <Input type="text" />
            </Option>
          </Section>
          <Section title="Locale">
            <Option>
              Some switch control
              <Switch on />
            </Option>
            <Option disabled={!settings.showEditor} multiline>
              Locale
              <Input type="text" value="ae/en"/>
            </Option>
          </Section>
        </Sidebar>
        <Preview>
          <Editor
            height="100vh"
            defaultLanguage="html"
            defaultValue="// over complicated template goes here"
            theme="vs-dark"
          />
        </Preview>
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

