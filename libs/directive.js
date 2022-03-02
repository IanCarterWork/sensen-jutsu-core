export class DirectiveAttributes {
    static Define(state) {
        this.Availables[state.name] = state;
        return this;
    }
    static Merge(...directives) {
        directives.map(directive => {
            if (directive.name in this.Availables) {
                throw (`WARNING ${directive.name} : You want to change the behavior of an existing attribute directive`);
            }
            this.Availables[directive.name] = directive;
        });
        return this;
    }
    static Retrive(key) {
        return this.Availables[key] || null;
    }
    static Retrives(directive) {
        return this.Merge(directive).Availables;
    }
}
DirectiveAttributes.Availables = {};
window.GlobalDirectiveAttributes = DirectiveAttributes;
