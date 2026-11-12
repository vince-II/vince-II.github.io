# Vince Nery II portfolio

A one-page portfolio styled as a Dracula code editor. Next.js, static export, no runtime server.

## Run it

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # writes the static site to out/

Deploy on Vercel as a normal Next.js project, or upload `out/` to any static host.

## Edit content

Everything you'd change lives in `src/content/profile.ts`: tagline, focus, stack, roles, projects, contact.
Roles take an optional `at` and `when`, which show up in `experience.yml` as soon as you fill them in.
Replace `public/avatar.png` to change the avatar.

## Structure

The UI library in `src/ui` follows atomic design. Each level only imports from the levels below it.

    src/ui/
      atoms/       Token, CodeLine, FileBadge, Avatar, Icon, IconSwap, Caret, WindowDots, StatusLabel
      molecules/   Tab, FileLink, CodeBlock, LinkLine, CopyButton, KeyValue, ShellPrompt
      organisms/   TitleBar, Explorer, EditorPane, StatusBar
      templates/   EditorWindow   (layout only, content comes in through slots)
      lib/         cursor context shared by EditorPane and StatusBar, enter-delay helper
    src/features/portfolio/components/
                   AboutFile, ExperienceFile, WorkFile, ContactTerminal
    app/           layout and page, which wire profile data into the template

The four `*File` components are only used on this page, so they stay in `features/portfolio`
instead of `src/ui`. If a second page needs one, move it down into `src/ui` at its level and
make it take its data through props.

`legacy/` holds the earlier single-file HTML versions.
